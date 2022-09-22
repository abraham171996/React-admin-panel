import React, { useState,useRef } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
    
    
    const [name,setName] = useState("")
    const [review,setReview] = useState("")
    const [image,setImage] = useState("")
    const refInput = useRef()
    const notify = ()=>toast.success("Datalar getdi")
    const notifyError = ()=>toast.error("Data getmedi, api duzgun islemir")
    const send = ()=>{
        if( review.length > 5 && name.length > 3){
            axios.post("https://abraham-b2fb0-default-rtdb.firebaseio.com/blog.json", {name,review,image, id : Date.now()})
            .then(res=>{
                setName("")
                setReview("")
               
                refInput.current.value = ""
                notify()
                console.log(res)
            }).catch(err=>{
                notifyError()
                console.log(err)
            })
        }
    }
    function sendFileAsync(file){
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }
    const uploadImage = async(e)=>{
        const file = e.target.files[0]
        const base64 = await sendFileAsync(file)
        setImage(base64)
    }
    
    const removeApi = ()=>{
        axios.delete("https://abraham-b2fb0-default-rtdb.firebaseio.com/blog.json")
        .then(res=>console.log(res)).catch(err=>console.log(err))
    }
  return (
    <div className='box'>
        <h2>Blog</h2>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name..."/>
        <input value={review} onChange={(e)=>setReview(e.target.value)} placeholder="Review..."/>
        <input className='special' type="file" ref={refInput} placeholder='image' onChange={uploadImage}/>
        <button onClick={send}>Send testimonal</button>
        <button onClick={removeApi}>Delete</button>
        <ToastContainer position='bottom-right' pauseOnHover={false}/>
    </div>
  )
}

export default Blog