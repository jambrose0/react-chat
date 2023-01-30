import React from 'react'
// import add from '../img/add.png'
export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
           <span className='logo'>Panda Chat</span>
           <span className='title'>Login Here</span>
            
    <form>
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