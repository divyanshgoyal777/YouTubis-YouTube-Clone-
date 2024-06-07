import React from 'react';

const NoNetworkPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-dark mx-5">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4 animate-bounce">No Internet Connection :(</h1>
        <p className="text-gray-700 text-lg mb-6">Please check your network and try again.</p>
        <svg className="w-16 h-16 text-red-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12a9 9 0 0118 0 9 9 0 01-18 0zm18-3a9 9 0 01-9 9m0 0a9 9 0 01-9-9m18-3a9 9 0 01-9-9"></path>
        </svg>
      </div>
    </div>
  );
};

export default NoNetworkPage;
