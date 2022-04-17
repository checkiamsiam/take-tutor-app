import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { async } from '@firebase/util';


const Signup = () => {
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const [show, setShow] = useState(false);
  const [displayName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [signInWithGoogle, user1, loading2, error3] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user3, loading3, error4] = useSignInWithFacebook(auth);
  const [
    createUserWithEmailAndPassword,
    user2,
    loading1,
    error2,
  ] = useCreateUserWithEmailAndPassword(auth);

  error1 && console.log(error1.message);
  error2 && console.log(error2.message);
  error3 && console.log(error3.message);
  error4 && console.log(error4.message);

  if (loading1 || updating || loading2 || loading3) {
    return <p>Loading...</p>;
  }


  const handleNameValue = (e) => {
    setName(e.target.value)
  }
  const handleEmailValue = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordValue = (e) => {
    setpassword(e.target.value)
  }

  const handleSubmit = async () => {
    await createUserWithEmailAndPassword(email, password)
    await updateProfile({ displayName })
  }


  return (
    <div>
      <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-center">Sing Up</h1>
          <form className="mt-6">
            <div className="my-5 text-sm">
              <label className="block text-black">Name</label>
              <input onChange={handleNameValue} type="text" autoFocus className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Name" />
            </div>
            <div className="my-5 text-sm">
              <label className="block text-black">Email</label>
              <input onChange={handleEmailValue} type="text" autoFocus className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" required />
            </div>
            <div className="my-5 text-sm">
              <label htmlFor="password" className="block text-black">Password</label>
              <input onChange={handlePasswordValue} type={show ? 'text' : 'password'} id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" required />
              <div className="flex justify-end mt-2 text-xs text-gray-600">
                <p className='cursor-pointer' onClick={() => setShow(!show)}>Show Password</p>
              </div>
            </div>

            <button onClick={handleSubmit} className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full" > Register </button>
          </form>

          <div className="flex md:justify-between justify-center items-center mt-10">
            <div className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
            <p className="md:mx-2 text-sm font-light text-gray-400">With Social </p>
            <div className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-2 mt-7">
            <div>
              <button onClick={() => signInWithFacebook()} className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
            </div>
            <div>
              <button onClick={() => signInWithGoogle()} className="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">Google</button>
            </div>
          </div>

          <p className="mt-12 text-xs text-center font-light text-gray-400"> Already have account? <Link to="/login" className="text-black font-medium"> Just Login </Link>  </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;