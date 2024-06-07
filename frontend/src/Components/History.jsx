import React from 'react';

const History = () => {
  return (
    <div className="min-h-screen">
      <header className=" shadow-sm">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-[2rem] font-bold">Watch history</h1>
        </div>
      </header>
      <div className="container mx-auto py-8 px-6">
        <div className="flex justify-center items-center">
          <p className="text-lg text-white">This history list has no videos.</p>
        </div>
      </div>
    </div>
  );
};

export default History;
