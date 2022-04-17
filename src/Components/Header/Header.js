import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='bg-slate-400  '>
                <div className='text-3xl p-4 mx-auto flex justify-center gap-5'>
                <div className='flex text-orange-800 font-thin'> 
                    <img className='w-10 h-10' src="wedding logo.png" alt="" />
                    <h3>Wedding Photographer</h3>
                </div>
           
                
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/services">Services</CustomLink>
                <CustomLink  to = "/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink  to="/login">Login</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;