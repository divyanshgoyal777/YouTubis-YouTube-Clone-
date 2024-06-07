import React from 'react';
import logo from '/src/assets/profile.gif'
import { useAuth0 } from "@auth0/auth0-react";

const You = () => {
    const { user } = useAuth0();
    const userName = user.name.replace(/\s+/g, '').toLowerCase();

    const playlists = [
        { id: 1, title: "JavaScript Basics", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0-TX2RggVkHGznurxxEHhp4XUVhKiIHg8g&s" },
        { id: 2, title: "React Advanced", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oVBDo-a-NxHtG9t8oTjMr_aieX3cKR85BA&s" }
    ];

    const watchLater = [
        {
            id: 1,
            title: "How to use YouTube API",
            thumbnail: "https://i.ytimg.com/vi/wA7b97sBYto/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDblV1W2wfE8ETAlZb1Xe8GlGbUMg",
            channel: "Divyansh Goyal",
            views: "1.2M views",
            time: "2 weeks ago",
            length: "10:21",
        },
        {
            id: 2,
            title: "Happy Nation Song | Ace of Base",
            thumbnail: "https://i.ytimg.com/vi/6vNnB4oLZNo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBm0UNReCIlRG-BNfBLdYUgRY5sRg",
            channel: "Divyansh Goyal",
            views: "500K views",
            time: "10 months ago",
            length: "3:01",
        },
        {
            id: 3,
            title: "The Nights Song | Slowed",
            thumbnail: "https://i.ytimg.com/vi/7fvdsW7JktY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAGGnBcOX1M6Yy9gklRQbvM2vZF3g",
            channel: "Divyansh Goyal",
            views: "800K views",
            time: "1 years ago",
            length: "3:11",
        },
    ];

    return (
        <div className="min-h-screen md:mb-auto mb-20">
            <header>
                <div className="container mx-auto py-4 px-6 md:flex items-center">
                    <img src={user.picture} alt="Channel Logo" width="100px" className="rounded-full mb-2 mr-4" />
                    <div>
                        <h1 className="text-[1.2rem] md:text-[2.6rem] font-bold">{user.name}</h1>
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

            <section className="container mx-auto py-8 px-6">
                <h2 className="text-xl font-bold mb-4">History</h2>
                <p className="text-[#aaa]">Your history list has no videos.</p>
            </section>

            <section className="container mx-auto py-8 px-6">
                <h2 className="text-xl font-bold mb-4">Playlists</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {playlists.map(playlist => (
                        <div key={playlist.id} className=" shadow-md rounded-lg overflow-hidden hover:cursor-pointer hover:bg-icon-color p-2">
                            <img src={playlist.thumbnail} alt={playlist.title} className="w-full h-46 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">{playlist.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto py-8 px-6">
                <h2 className="text-xl font-bold mb-4">Watch Later</h2>
                <div className='container mx-auto p-4'>
                    <div className="flex flex-wrap -mx-3">
                        {watchLater.map(video => (
                            <div key={video.id} className="card w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-3 hover:cursor-pointer hover:bg-icon-color rounded-xl">
                                <div className="thumbnail my-3 relative">
                                    <img className='rounded-xl w-full' src={video.thumbnail} alt={video.title} />
                                    <div className="absolute bottom-2 right-2 bg-gray-950 bg-opacity-75 rounded-lg p-1">
                                        <p className="text-white text-sm font-bold">{video.length}</p>
                                    </div>
                                </div>
                                <div className="details flex flex-row mx-1">
                                    <div className="channel-logo mr-2">
                                        <img className='rounded-full' width="30px" src={logo} alt="Logo" />
                                    </div>
                                    <div>
                                        <p className="title font-bold">{video.title}</p>
                                        <p className="channel text-sm md:text-xs text-[#aaa] hover:text-white">{video.channel}</p>
                                        <div className="flex text-sm md:text-xs gap-1 text-[#aaa]">
                                            <p className='views'>{video.views}</p>
                                            <p>•</p>
                                            <p className="time">{video.time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-8 px-6">
                <h2 className="text-xl font-bold mb-4">Liked Videos</h2>
                <div className="container mx-auto py-8 px-6">
                    <div className="flex justify-center items-center">
                        <p className="text-lg text-white">This liked videos list has no liked videos.</p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-8 px-6">
                <h2 className="text-xl font-bold mb-4">Your Clips</h2>
                <p className='text-sm text-[#aaa]'>Clip and share your favorite moments. Your list shows up right here.</p>
            </section>
        </div>
    );
};

export default You;
