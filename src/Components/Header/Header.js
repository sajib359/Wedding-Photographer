import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='bg-slate-400  '>
                <div className='text-3xl p-4 mx-auto flex justify-center gap-5'>
                <div className='flex text-orange-800 font-thin'> 
                    <img className='w-10 h-10' src="wedding logo.png" alt="" />
                    <h3>Wedding Photographer</h3>
                </div>
           
                
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link  to = "/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                <Link  to="/login">Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;