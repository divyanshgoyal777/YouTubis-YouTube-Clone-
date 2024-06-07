import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const YourChannel = () => {
    const { user } = useAuth0();
    const userName = user.name.replace(/\s+/g, '').toLowerCase();
    return (
        <div className="min-h-screen">
            <header>
                <div className="container mx-auto py-4 px-6 md:flex items-center">
                    <img src={user.picture} alt="Channel Logo" width="150px" className="rounded-full mr-4 mb-2" />
                    <div>
                        <h1 className="text-[1.2rem] xmd:text-[2.6rem] font-bold">{user.name}</h1>
                        <div className='text-xs md:text-sm text-[#aaa]'>
                            <div className='sm:flex gap-1 my-1 mb-2'>
                                <p>@{userName}777</p>
                                <p className='sm:block hidden'>•</p>
                                <p>1.4M Subscribers</p>
                            </div>
                            <p>Hello, My name is {user.name}...</p>
                            {/* <p className='hover:text-blue-700'><a target='_blank' href="https://portfolioofdivyansh.netlify.app">My Portfolio - Click to Check!</a></p> */}
                        </div>
                    </div>
                </div>
            </header>
            <nav className="shadow-sm">
                <div className="container flex justify-between items-center pt-4 px-4">
                    <ul className="flex gap-3">
                        <li className="ml-4 font-bold hover:cursor-pointer">Home</li>
                        <li className="ml-4 text-[#aaa] hover:cursor-pointer">Live</li>
                        <li className="ml-4 text-[#aaa] hover:cursor-pointer">Community</li>
                    </ul>
                </div>
                <hr className="border-gray-700 my-2" />
            </nav>
            <div className="container mx-auto py-8 px-6">
                <p className="text-center">Manage your videos here</p>
            </div>
        </div>
    );
};

export default YourChannel;
