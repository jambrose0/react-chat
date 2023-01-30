import React from 'react'
import Img from '../img/add.png'
import Attach from '../img/attach.png'

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder="Type here" />
      <div className="send">
        <img src={Attach} alt="" srcset="" />
        <input type="file" style={{display:'none'}} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" srcset="" />
        </label>
        <button>Send</button>
      </div>  

    </div>

  )
}

export default Input