import React from 'react'
import { useState} from 'react'
import add from '../img/add.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth,storage, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
// import { useNavigate } from 'react-router-dom'

export const  Register=() => {
const [err, setErr] = useState(false)

const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    console.log(displayName, email, password)
try{
    //creates users
   const res= await createUserWithEmailAndPassword(auth, email, password);

   //create references so users can upload images
  const storageRef = ref(storage, displayName);
   
   const uploadTask = uploadBytesResumable(storageRef, file);
   

   uploadTask.on((error) => {
    setErr(true)
     }, 
     (error) => {
     }, 
     () => {
       getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
         await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
         })
         await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          }          );

          await setDoc(doc(db, "userChats", res.user.uid), {})
       });
     }
   );


} catch (err) {
    setErr(true);
}


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
         {err && <span>Something went wrong</span>}
     <p>Do you already have an account? Login</p>
        </form>
    
            </div>
            
            </div>
      )
    }
    export default Register;