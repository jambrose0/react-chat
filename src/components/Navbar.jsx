import React from 'react'
import spy from '../img/spy.png'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama Chat </span>
      <div className='user'>
        <img src={spy} alt='' />
        <span>Jacob</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
      </div>
  )
}

export default Navbar