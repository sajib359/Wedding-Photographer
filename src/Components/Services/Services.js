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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto justify-items-center'>
            {
                  packages.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)  
                }
        </div>
    );
};

export default Services;