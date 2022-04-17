import React from 'react';

const Blogs = () => {
  return (
    <div>

      <div className="container mx-auto flex flex-wrap gap-1 my-5">
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Difference between authorization and authentication?</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Authorization means authorize someone for doing some special that can't do others (normal user). and authenticaion means take him as a valid user and take some nessecery data of him for safety reason.</p>
        </div>
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Why are you using firebase? What other options do you have to implement authentication?</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">firebase is a third party tool for authenticaion it helps us a lot by using third party tool we can do this easyly and save out times and data will store here safely. some alternative options of firebase is couchbase,flutter,kuzzle,parse, back4app and others</p>
        </div>
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What other services does firebase provide other than authentication?</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">firebase can be also work ful for hosting web , app and others. and also can be used alternative of database and we can store data and also helpfull for matchine learning</p>
        </div>
      </div>

    </div>
  );
};

export default Blogs;