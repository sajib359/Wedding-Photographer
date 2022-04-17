import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [ packages , setPackage] =useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setPackage(data))
    },[])
    return (
        <div>
           <h1 className='text-3xl bg-black text-amber-300 font-bold p-3 '>We Are Available For All Package</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto justify-items-center'>
            {
                  packages.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)  
                }
            </div>
        </div>
    );
};

export default Services;