import React from 'react';

const ServicesCard = ({ service }) => {
  return (
    <div className="px-4 md:w-1/3 relative mt-2">
      <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={service.img} alt="blog" />
        <div className="p-6 ">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-{service.id}</h2>
          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{service.name}</h1>
          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Cost: <span className='text-4xl'>{service.price}</span>$/mo</h1>
          <p className="leading-relaxed mb-6">{service.details}</p>
          <div className="flex items-center flex-wrap absolute bottom-0 py-2">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg ">Checkout</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;