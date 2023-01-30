import React from 'react'
import camera from "../img/camera.png"
import friend from '../img/friend.png'
import more from '../img/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={camera} alt="" />
          <img src={friend} alt="" />
          <img src={more} alt="" />

               </div>
      </div>
               <Messages />
               <Input />

    </div>
  )
}

export default Chat
