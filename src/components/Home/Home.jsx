import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
const Home = () => {
  return (
    <div className='main'>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/team">Team</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/services">Services</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home