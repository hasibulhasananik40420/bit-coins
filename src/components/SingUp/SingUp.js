import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SingUp = () => {
      
      const [email, setEmail] = useState('')
      const [password , setPassword] = useState('')
      const [confirmPassword , setConfirmPassword] = useState('')
      const [error , setError] = useState('')
      const [user] = useAuthState(auth)

      const [ createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

        

       const handleEmailBlur = event=>{
           setEmail(event.target.value)
       }

       const handlePasswordBlur = event=>{
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event=>{
        setConfirmPassword(event.target.value)
    }

     const createUserSingUp  = event=>{
         event.preventDefault()
         if(password !== confirmPassword){
            setError("Your password didn't match.")
         }
          if(password.length<6){
              setError("Password must be 6 charactor.")
          }
         createUserWithEmailAndPassword(email , password)
     }
     
    return (
        <div className='bg-slate-700'>
      
                
        <h1 className='text-3xl text-center text-white mb-3 pt-3'> Please Sing Up</h1>
         <form onSubmit={createUserSingUp} className='text-center'>
         
          <div>
              <label className='block mb-3' htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} className='w-1/4 pt-3' type="email" name="email" id="" />
          </div>
          <div>
              <label className='block  mb-3 mt-3' htmlFor="password">Password</label>
              <input onBlur={handlePasswordBlur} className='w-1/4 pt-3' type="password" name="password" id="" />
          </div>
          <div>
              <label className='block  mb-3 mt-3' htmlFor="confirm-password">Confirm Password</label>
              <input onBlur={handleConfirmPasswordBlur} className='w-1/4 pt-3' type="password" name="confirm-password" id="" />
          </div>
            <p style={{color:'red'}}>{error}</p>
             <button className='w-1/4 p-2 bg-red-900 mt-5 mb-4 text-white text-xl' type="submit">Sing Up</button>
             <p className=''>
                 Create an account ? <Link className='text-white ml-4 ' to='/login'>Login</Link>
             </p>
             
         </form>
       </div>

    );
};

export default SingUp;