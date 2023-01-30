import React from 'react'
import {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'


export const Login = () => {
  const [err, setErr] = useState(false);
  //   const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      // setLoading(true);
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate('/login')
      
      } catch (err) {
        setErr(true);
      //   setLoading(false);
      }
    };

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
           <span className='logo'>Panda Chat</span>
           <span className='title'>Login Here</span>
            
    <form onSubmit={handleSubmit}>
        <input type="email"  placeholder='email'/>
        <input type="password" placeholder='password' />
     <button>Sign In</button>
     <p>Don't have an account? Register Here</p>
    </form>

        </div>
        
        </div>
  )
}

export default Login;