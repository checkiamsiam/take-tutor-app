import React from 'react';
import profile from '../../images/my-bc2.png';

const Review = () => {
  return (
    <div>
      <h1 className='text-5xl p-5 text-center text-sky-400 underline'>Top Review</h1>
      <article className="md:gap-8 md:grid md:grid-cols-3 md:mx-20 md:my-5 mx-5 my-3">
        <div>
          <div className="flex items-center mb-6 space-x-4 ">
            <img className="w-10 h-10 rounded-full" src={profile} alt="" />
            <div className="space-y-1 font-medium dark:text-white">
              <p>Sheikh Shahariar Siam</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                Bangladesh
              </div>
            </div>
          </div>
          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li className="flex items-center"><svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"></path></svg>Apartament with City View</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>3 nights December 2021</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>Family</li>
          </ul>
        </div>
        <div className="col-span-2 mt-6 md:mt-0">
          <div className="flex items-start mb-5">
            <div className="pr-4">
              <footer>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Reviewed: <time dateTime="2022-01-20 19:00">January 20, 2022</time></p>
              </footer>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">He is a good tutor</h4>
            </div>
            <p className="bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">8.7</p>
          </div>
          <p className="mb-2 font-light text-gray-500 dark:text-gray-400">i was very weak in english and physics after admit his coaching i am starting to enjoy with my study.</p>
          <p className="mb-5 font-light text-gray-500 dark:text-gray-400">you guys can easyly bealeave him for sure</p>
          <aside className="flex items-center mt-3 space-x-5">
            <p  className="pointer-events-none inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
              Helpful
            </p>
            <p  className="pointer-events-none inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path></svg>
              Not helpful
            </p>
          </aside>
        </div>
      </article>

    </div>
  );
};

export default Review;