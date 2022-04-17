import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container banner mx-auto mt-4 rounded-sm md:h-[70vh] h-[50vh] md:w-[100vw] flex items-center justify-items-center ">
        <div className="container md:ml-[-5rem] text-center text-yellow-50 md:p-0 p-16 ">
          <h1 className='md:text-3xl text-xl md:first-letter:text-4xl'>Welcome to take tutor</h1>
          <p>Get the best tutor for your child</p>
          <button onClick={()=> navigate('/about')}  className='rounded-full bg-sky-400 px-4 py-1 md:mt-5 mt-3 hover:bg-sky-600 text-black'>Read About me</button>
        </div>

      </div>
    </div>
  );
};

export default Banner;