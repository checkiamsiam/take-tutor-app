import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const handleCheck = (e) => {
    setAgree(!agree)
  }
  const handleEmailValue = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordValue = (e) => {
    setpassword(e.target.value)
  }
  console.log(email , password);

  return (
    <div className='container mx-auto my-5'>
      <form className="bg-white shadow-xl mb-4 flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 bg-blue-400 p-6 text-white">
          <p className="mb-8 text-3xl flex items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 512 512"
              className="inline-block fill-current h-8 w-8 mr-2"
            >
              <path
                d="m64 496l0-256 48 0 0-80c0-71 57-128 128-128l16 0c71 0 128 57 128 128l0 80 48 0 0 256z m172-131l-12 83 48 0-12-83c12-5 20-17 20-30 0-18-14-32-32-32-18 0-32 14-32 32 0 13 8 25 20 30z m100-197c0-49-39-88-88-88-49 0-88 39-88 88l0 72 176 0z"
              />
            </svg>
            Login Now
          </p>
          <div className="mb-4">
            <input
              onChange={handleEmailValue}
              className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <input
              onChange={handlePasswordValue}
              className="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <label className="block text-sm mb-4">
            <input onClick={handleCheck} type="checkbox" /> agree terms and conditions
          </label>
          <button
            className="block w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline disabled:bg-orange-600"
            type="submit"
            disabled={!agree}
          >Login</button>


          <p
            className="block w-full text-sm text-right text-white hover:text-gray-300 cursor-pointer"
            href="#"
          >Forgot Password?</p>
        </div>
        <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
          <p
            className="text-gray-700 mb-8 text-3xl text-center"
          >Login to access everything</p>
          <Link
            className="block w-full mb-8 text-sm text-center text-blue-600 hover:text-blue-700"
            to="/signup"
          >Don't have an account? Register Now!</Link>

          <p className="mb-4 text-center">OR</p>
          <hr className="block w-full mb-4 border-0 border-t border-gray-300" />

          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
              <button
                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="button"
              >Login with Facebook</button>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-2">
              <button
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="button"
              >Login with Google</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;