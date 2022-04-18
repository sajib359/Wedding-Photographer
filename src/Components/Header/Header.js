import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const[user]=useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut =()=>{
        signOut(auth);
        navigate('/login');
    }
    return (
        <div >
            <nav className='grid md:flex gap-5 justify-center bg-teal-400 p-4 text-2xl font-mono font-bold'>
                
                <div className='flex text-orange-800 font-thin gap-3'> 
                    <img className='w-10 h-10 ' src="wedding logo.png" alt="" />
                    <h3>Wedding Photographer</h3>

                </div>
           
                
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/services">Services</CustomLink>
                <CustomLink  to = "/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                {
                    user ?
                    <button onClick={handleSignOut} className=' text-2xl font-mono font-bold'>signout</button>
                :
                <CustomLink  to="/login">Login</CustomLink>
            }
            </nav>
        </div>
    );
};

export default Header;