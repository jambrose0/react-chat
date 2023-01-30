import React from 'react'
import add from '../img/add.png'
// import { useNavigate } from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'


export const  Register=() => {

const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    console.log(displayName, email, password)

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


}

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
               <span className='logo'>Panda Chat</span>
               <span className='title'>Register Here</span>
                
        <form        onSubmit={handleSubmit}
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