import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-slate-700'>
            
          <h1 className='text-3xl text-center text-white mb-3 pt-3'> Please Login</h1>
           <form className='text-center '>
           
            <div>
                <label className='block mb-3' htmlFor="email">Email</label>
                <input className='w-1/4 pt-3' type="email" name="email" id="" />
            </div>
            <div>
                <label className='block  mb-3 mt-3' htmlFor="password">Password</label>
                <input className='w-1/4 pt-3' type="password" name="password" id="" />
            </div>
               <button className='w-1/4 p-2 bg-red-900 mt-5 mb-4 text-white text-xl' type="submit">Login</button>
               <p>
                   Create an account ? <Link className='text-white ml-4 ' to='/singup'>Sing Up</Link>
               </p>
               
           </form>

        </div>
    );
};

export default Login;