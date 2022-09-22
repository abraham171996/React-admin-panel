import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Team from './components/Team/Team'
import Blog from './components/Blog/Blog'
import Services from './components/Services/Services'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='team' element={<Team/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='services' element={<Services/>}/>
        
      </Routes>
    </div>
  )
}

export default App