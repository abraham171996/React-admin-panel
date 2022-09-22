import React, { useState,useRef } from 'react'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './team.css'

  

const Team = () => {
    const [title,setTitle] = useState("")
    const [name,setName] = useState("")
    const [image,setImage] = useState("")
    const refInput = useRef()
    const notify = ()=>toast.success("Datalar getdi")
    const notifyError = ()=>toast.error("Data getmedi, api duzgun islemir")
    const send = ()=>{
        if(title.length > 3 && name.length > 3){
            axios.post("https://abraham-b2fb0-default-rtdb.firebaseio.com/team.json", {title,name,image, id : Date.now()})
            .then(res=>{
                setName("")
                 setTitle("")
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
        axios.delete("https://abraham-b2fb0-default-rtdb.firebaseio.com/team.json")
        .then(res=>console.log(res)).catch(err=>console.log(err))
    }
  return (
    <div className='box'>
        <h2>Team</h2>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title..."/>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name..."/>
        <input className='special' type="file" ref={refInput} placeholder='image' onChange={uploadImage}/>
        <button onClick={send}>Send testimonal</button>
        <button onClick={removeApi}>Delete</button>
        <ToastContainer position='bottom-right' pauseOnHover={false}/>
    </div>
  )
}

export default Team