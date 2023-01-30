import React from 'react'
import spy from '../img/spy.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama Chat </span>
      <div className='user'>
        <img src={spy} alt='' />
        <span>Jacob</span>
        <button>Logout</button>
      </div>
      </div>
  )
}

export default Navbar