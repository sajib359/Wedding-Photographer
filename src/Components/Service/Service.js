import React from 'react';

const Service = (props) => {
    const{name ,img ,details,category, price}=props.service;
    return (
        <div className='border-2 w-96 rounded-md mt-5 shadow-lg bg-white'>
            <div>
                <img className='mx-auto rounded-lg mt-3 w-60 h-60' src={img} alt="" />
            </div>
           <div className='text-left mt-5 p-3'>
                <h2 className='text-xl font-bold'>{name}</h2>
                <h3 className='text-xl font-bold'> Category: <span className='text-base text-violet-500'>{category}</span></h3>
                <p>{details}</p>
                <h4>PRICE: {price}</h4>
                <button className='w-full bg-slate-500'>Cheakout</button>

                
           </div>
            
        </div>
    );
};

export default Service;