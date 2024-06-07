import React from 'react';

const Your_Videos = () => {
  return (
    <div className="container mx-auto">
      <header className=" shadow-sm">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-[2rem] font-bold">Your Videos</h1>
        </div>
      </header>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Videos Found</h2>
          <p className="text-gray-600">You do not have any videos.</p>
        </div>
    </div>
  );
};

export default Your_Videos;
