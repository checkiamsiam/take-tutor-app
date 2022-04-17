import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';

const Services = () => {
  const [services , setServices] =  useState([]);
  useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div>
      <div>
        <h1 className='text-5xl p-5 text-center text-sky-400 underline'>Services</h1>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              {services.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)}
            </div>
          </div>
        </section>

      </div>








    </div>
  );
};

export default Services;