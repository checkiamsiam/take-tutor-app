import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../../images/my-bc2.png';

const About = () => {
  const natigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img className="w-screen h-screen object-cover object-top" src={profile} alt="" />
            </div>
            <div className="flex bg-gray-100 p-10">
              <div className="mb-auto mt-auto max-w-lg">
                <h1 className="text-3xl uppercase">Sheikh Shahariar Siam</h1>
                <p className="font-semibold mb-5">Web Developer</p>
                <p>From starting of my web development career i always want to be a good developer first then i want to get a job in us or france but the best wish is very complecated but its amazing , to build a programing community with my friend.</p>
                <button onClick={() => natigate('/blogs')} className="bg-black rounded-md py-3 px-7 m-6 text-white z-10">See blogs i wrote</button> <br />
                <code>this website is my creation as web developer i am not a tutor</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;