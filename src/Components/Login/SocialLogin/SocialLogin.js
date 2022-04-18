import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';

const SocialLogin = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <div className='flex justify-items-center'>
                <div className='bg-gray-300 w-1/2 h-1'></div>
                <p className='mb-4 p-2'>Or</p>
                <div className='bg-gray-300 w-1/2 h-1'></div>
            </div>

            <div className='mt-3 w-fit mx-auto'>
                <button className='w-72 bg-white shadow-lg rounded-md flex text-2xl font-bold gap-2 justify-center'>
                    <img className='w-20' src="google.jpg" alt="" />
                  Google SignIn
                </button>
               
            </div>
            <div className='mt-3 w-fit mx-auto'>
                <button className='w-72 bg-white shadow-lg rounded-md flex text-2xl font-bold gap-2 justify-center content-center'>
                    <img className='w-20' src="logo-github.png" alt="" />
                  Github SignIn
                </button>
               
            </div>
        </div>
    );
};

export default SocialLogin;