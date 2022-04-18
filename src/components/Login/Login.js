import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../../Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [errorMessege, setErrorMessege] = useState();
  const [
    signInWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);
  const [sendPasswordResetEmail, sending, error4] = useSendPasswordResetEmail(
    auth
  );
  // error1 && console.log(error1.message);
  // error2 && console.log(error2.message);
  // error3 && console.log(error3.message);
  // error4 && console.log(error4.message);

  if (loading1 || loading2 || loading3) {
    return <Loader></Loader>
  }

  const handleCheck = (e) => {
    setAgree(!agree)
  }
  const handleEmailValue = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordValue = (e) => {
    setpassword(e.target.value)
  }
  const handleFBSignin = async () => {
    await signInWithFacebook()
    await navigate(from, { replace: true });
  }
  const handleGoogleSignin = async () => {
    await signInWithGoogle()
    await navigate(from, { replace: true });
  }


  const handleSubmit = async () => {
    await signInWithEmailAndPassword(email, password)
    if (user1) {
      await navigate(from, { replace: true });
    } else {
      await setErrorMessege('Your entire email or password is incorrect')
    }
  }
  const handleReset = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      await toast('Reset mail sent.', {
        style: {
          marginTop: '30vh',
          border: '1px solid pink',
        },
      })
    } else {
      await toast('enter email first', {
        style: {
          marginTop: '30vh',
          border: '1px solid pink',
        },
      })
    }
  }
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
          <p className='text-red-600 m-5 '>{errorMessege}</p>
          <button
            onClick={handleSubmit}
            className="block w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline disabled:bg-orange-600"
            type="submit"
            disabled={!agree}
          >Login</button>


          <p onClick={handleReset}
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
                onClick={handleFBSignin}
                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="button"
              >Login with Facebook</button>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-2">
              <button
                onClick={handleGoogleSignin}
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="button"
              >Login with Google</button>
            </div>
          </div>
        </div>
      </form >
      <Toaster>
      </Toaster>
    </div >
  );
};

export default Login;