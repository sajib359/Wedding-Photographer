import React from 'react';
import Carousel from '../Carousel/Carousel';

const Home = () => {
    return (
        <div>
           <img className='w-full ' src="https://shahriarnobinewazphotography.com/wp-content/uploads/2022/01/www.facebook.com_shahriarnobinewazphotography_For_Web_0156.jpg" alt="" />

           <div className='flex justify-center  bg-sky-100'>
               <div className='w-full'>
                    <img className='mx-auto rounded-md mt-5' src="https://shahriarnobinewazphotography.com/wp-content/uploads/2022/02/SNN07200-Web-2-400x522.jpg" alt="" />
                    <h2 className='text-2xl font-bold text-blue-600'>Shahriar Nobi Newaz</h2>
                    <h4 className='text-lg font-semibold text-blue-400'>Dhaka, Bangladesh </h4>
                    <p className='text-lg font-mono font-semibold p-3'>Shahriar Nobi Newaz is an wedding photography & Cinematography farm that covering events all over the globe.</p>
                    <button className='bg-red-400 p-3 rounded-xl text-2xl font-mono font-bold '>BOOKING</button>


               </div>
               <div className='w-full text-center mt-40 '>
                    <h2 className='text-5xl font-semibold text-sky-500'>My Stories</h2>
                        <p className='p-5 text-xl font-mono'>I (Shahriar Nobi Newaz) started my professional career in the photography field in 2006 in Dhaka, Bangladesh.I have been working as a wedding photographer for last 15 years in different cities in Bangladesh.
                        This long journey helped me to build up my expertise on the field of wedding photography. My work was recognised by “WPPB – Association Of Bangladeshi Professional Wedding & Portrait Photographers And Cinematographers”
                        and won awards in three different categories in the year of 2021.

                        Please visit Gallery to have a look of some my works.</p>
               </div>
           </div>

           <div>
               
           </div>
        </div>
    );
};

export default Home;