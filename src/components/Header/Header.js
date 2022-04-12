import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    
     const [user] = useAuthState(auth)

      const singOut =()=>{
        signOut(auth)
      }
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className=' hidden md:block'> <Link className='font-sans font-bold text-xl text-gray-600' to='/'>
          Crypto <span className='text-gray-900'> Cafe</span>
        </Link></div>

            <div className=' flex gap-4 text-xl'>
              <CustomLink to='/'>Home</CustomLink>
              <CustomLink to='/coins'>Coins</CustomLink>
              <CustomLink to='/contact'>Contact</CustomLink>
              <CustomLink to='/about'>about</CustomLink>
              {
                user ?
                <button onClick={singOut}>Sing Out</button>
                :
                <CustomLink to='/login'>Login</CustomLink>
                
                }
            </div>
        </div>
    );
};

export default Header;