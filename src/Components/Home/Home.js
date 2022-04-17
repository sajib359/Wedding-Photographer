import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Home = () => {
    const [ packages , setPackage] =useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setPackage(data))
    },[])
    return (
        <div>
           <img className='w-full ' src="https://shahriarnobinewazphotography.com/wp-content/uploads/2022/01/www.facebook.com_shahriarnobinewazphotography_For_Web_0156.jpg" alt="" />

           <div className='flex justify-center  bg-sky-100 pb-5'>
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

           <div className='bg-blue-100 '>
               <h1 className='text-3xl bg-black text-amber-300 font-bold p-3 '>Our Services</h1>

               <div>

               </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto justify-items-center'>
                {
                  packages.slice(0,3).map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)  
                }
            </div>
            <Link to='/reviews'>
           <button className='text-2xl font-mono font-bold bg-cyan-300 md:px-16 py-3 mt-5 ' 
            >See All Services </button>
            </Link>
           </div>
        </div>
    );
};

export default Home;