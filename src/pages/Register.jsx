import React from 'react'
import add from '../img/add.png'
import { useNavigate } from 'react-router-dom'



export const  Register=() => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
               <span className='logo'>Panda Chat</span>
               <span className='title'>Register Here</span>
                
        <form 
        // onSubmit={handleSubmit}
        >
            <input type="text" placeholder='username' />
            <input type="email"  placeholder='email'/>
            <input type="password" placeholder='password' />
            <input style={{display:"none"}} type="file" id='file'/>
            <label htmlFor='file'><img src={add} alt="" /><span>Add a Profile Pic</span></label>
         <button>Sign Up</button>
        
         {/* {err && <span>Something went wrong</span>} */}
        
         <p>Do you already have an account? Login</p>
        </form>
    
            </div>
            
            </div>
      )
    }
    export default Register;