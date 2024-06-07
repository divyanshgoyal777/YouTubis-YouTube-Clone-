import React from 'react';
import { useParams } from 'react-router-dom';
import channelsData from './ChannelsData';

const User = () => {
    const { id } = useParams();
    const channel = channelsData.find(channel => channel.id === id);
    if (!channel) {
        return <div className="min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <p className="text-center font-bold text-red-600">No channel found!</p>
            </div>
        </div>
    }
    const { name, description, channelId, logo, subscribers, text, banner } = channel;
    return (
        <div className="min-h-screen">
            <header>
                <div className='px-6 py-1'>
                <img className='w-full rounded-xl' src={banner} alt="Banner" />
                </div>
                <div className="container mx-auto py-4 px-6 md:flex items-center">
                    <img src={logo} alt="Channel Logo" className="w-20 md:w-36 mb-2 rounded-full mr-4" />
                    <div>
                        <h1 className="text-[1.5rem] md:text-[2.6rem] font-bold">{name}</h1>
                        <div className='text-sm text-[#aaa]'>
                            <div className='sm:flex gap-1 my-1 mb-2'>
                                <p>{channelId}</p>
                                <p className='sm:block hidden'>•</p>
                                <p>{subscribers} Subscribers</p>
                            </div>
                            <p>{description}</p>
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
                <p className="text-center">{text}</p>
            </div>
        </div>
    );
};

export default User;
