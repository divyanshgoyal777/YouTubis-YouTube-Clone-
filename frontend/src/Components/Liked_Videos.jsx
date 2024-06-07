import React from 'react'

const Liked_Videos = () => {
  return (
    <div className="min-h-screen">
    <header className=" shadow-sm">
      <div className="container mx-auto py-4 px-6">
        <h1 className="text-[2.3rem] font-bold">Liked Videos</h1>
      </div>
    </header>
    <div className="container mx-auto py-8 px-6">
      <div className="flex justify-center items-center">
        <p className="text-lg text-white">This liked videos list has no liked videos.</p>
      </div>
    </div>
  </div>
  )
}

export default Liked_Videos
