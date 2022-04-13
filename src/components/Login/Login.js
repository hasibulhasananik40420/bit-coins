import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const Login = () => {
     const navigate = useNavigate()
    const [ signInWithEmailAndPassword,user , loading, error ] = useSignInWithEmailAndPassword(auth);



     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const location = useLocation()
     const from = location.state?.from?.pathname || '/'
      if(user){
        navigate(from , {replace: true})
      }

      const [signInWithGoogle] = useSignInWithGoogle(auth);
       const handleWithGoogle =()=>{
        signInWithGoogle()
       }

     const handleEmailBlur = event=>{
         setEmail(event.target.value)
     } 
     
     const handlePasswordBlur = event=>{
         setPassword(event.target.value)
     }

      const handleLogin = event=>{
          event.preventDefault()
          signInWithEmailAndPassword(email,password)
      }

    return (
        <div className='bg-slate-700'>
            
          <h1 className='text-3xl text-center text-white mb-3 pt-3'> Please Login</h1>
           <form onSubmit={handleLogin} className='text-center '>
           
            <div>
                <label className='block mb-3' htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} className='w-1/4 pt-3' type="email" name="email" id="" />
            </div>
            <div>
                <label className='block  mb-3 mt-3' htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} className='w-1/4 pt-3' type="password" name="password" id="" />
            </div>
               <p style={{color:'red'}}>{error?.message}</p>
               {loading && <p>Loading...</p>}
               <button className='w-1/4 p-2 bg-red-900 mt-5 mb-4 text-white text-xl' type="submit">Login</button>
               <p>
                   Create an account ? <Link className='text-white ml-4 ' to='/singup'>Sing Up</Link>
               </p>
               <button onClick={()=>handleWithGoogle()} className='w-1/4 p-2 bg-red-900 mt-5 mb-4 text-white text-xl' > <span className='flex justify-center gap-2'> <img className='w-[30px]' src="https://img.icons8.com/fluency/2x/google-logo.png" alt="" /> Continue with Google </span></button>
           </form>

        </div>
    );
};

export default Login;