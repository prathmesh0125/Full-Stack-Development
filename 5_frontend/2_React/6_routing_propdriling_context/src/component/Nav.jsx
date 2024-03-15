import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate=useNavigate();
  return (
    <div>
      <nav style={{
        display:'flex',
        justifyContent:"center",
        gap:"5rem",
        backgroundColor:"red"
      }}>
        <button onClick={()=>{
          // window.location.href="/"
          navigate('/')
        }}>home</button>
        <button onClick={()=>{
          // window.location.href="/dashboard"
          navigate('/Dashboard')
        }}>dash</button>
      
      </nav>
    </div>
  )
}

export default Nav
