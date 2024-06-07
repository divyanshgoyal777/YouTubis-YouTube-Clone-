import React from 'react';
import videochannel from '/src/assets/profile.gif';

const WatchLater = () => {
    const videos = [
        {
            id: 1,
            title: "Learn React in 30 Minutes",
            thumbnail: "https://i.ytimg.com/vi/wA7b97sBYto/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDblV1W2wfE8ETAlZb1Xe8GlGbUMg",
            channel: "Divyansh Goyal",
            views: "1.2M views",
            time: "2 weeks ago",
            length: "10:21",
            channelpic: videochannel
        },
        {
            id: 2,
            title: "Advanced CSS Tricks and Tips",
            thumbnail: "https://i.ytimg.com/vi/6vNnB4oLZNo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBm0UNReCIlRG-BNfBLdYUgRY5sRg",
            channel: "Divyansh Goyal",
            views: "500K views",
            time: "1 month ago",
            length: "8:01",
            channelpic: videochannel
        },
        {
            id: 3,
            title: "JavaScript Best Practices",
            thumbnail: "https://i.ytimg.com/vi/7fvdsW7JktY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAGGnBcOX1M6Yy9gklRQbvM2vZF3g",
            channel: "Divyansh Goyal",
            views: "800K views",
            time: "3 days ago",
            length: "32:11",
            channelpic: videochannel
        },
    ];

    return (
        <div className="min-h-screen md:mb-auto mb-20">
            <header>
                <div className="container mx-auto py-4 px-6">
                    <h1 className="text-xl font-bold">Watch Later</h1>
                </div>
            </header>
            <div className='container mx-auto p-4'>
                <div className="flex flex-wrap -mx-3">
                    {videos.map(video => (
                        <div key={video.id} className="card w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-3 hover:cursor-pointer hover:bg-icon-color rounded-xl">
                            <div className="thumbnail my-3 relative">
                                <img className='rounded-xl w-full' src={video.thumbnail} alt={video.title} />
                                <div className="absolute bottom-2 right-2 bg-gray-950 bg-opacity-75 rounded-lg p-1">
                                    <p className="text-white text-sm font-bold">{video.length}</p>
                                </div>
                            </div>
                            <div className="details flex flex-row mx-1">
                                <div className="channel-logo mr-2">
                                    <img className='rounded-full' width="30px" src={video.channelpic} alt="Logo" />
                                </div>
                                <div>
                                    <p className="title font-bold">{video.title}</p>
                                    <p className="channel text-sm md:text-xs text-[#aaa] hover:text-white">{video.channel}</p>
                                    <div className="flex text-sm md:text-xs gap-1 text-[#aaa]">
                                        <p className='views'>{video.views}</p>
                                        <p>•</p>
                                        <p className="time">{video.views}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WatchLater;
