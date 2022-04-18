import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div >
            <nav className='grid md:flex gap-5 justify-center bg-teal-400 p-4 text-2xl font-mono font-bold'>
                {/* <div className='text-3xl p-4 mx-auto flex justify-center gap-5'> */}
                <div className='flex text-orange-800 font-thin gap-3'> 
                    <img className='w-10 h-10 ' src="wedding logo.png" alt="" />
                    <h3>Wedding Photographer</h3>

                </div>
           
                
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/services">Services</CustomLink>
                <CustomLink  to = "/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink  to="/login">Login</CustomLink>
                {/* </div> */}
            </nav>
        </div>
    );
};

export default Header;