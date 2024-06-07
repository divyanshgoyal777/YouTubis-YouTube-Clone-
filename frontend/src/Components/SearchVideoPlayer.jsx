import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchVideoPlayer = () => {
    const location = useLocation();
    const video = location.state?.video;

    if (!video) {
        return <div className="p-4">No video selected</div>;
    }

    return (
        <div className="flex flex-col items-center p-4">
            <div className="w-full mb-4">
                <center>
                    <iframe
                        className='w-11/12 md:h-[500px] h-[300px]'
                        src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube Video Player"
                    ></iframe>
                </center>
            </div>
            <h1 className="text-2xl mb-4">{video.snippet.title}</h1>
            <div className="text-gray-600">
                <p>{video.snippet.channelTitle}</p>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default SearchVideoPlayer;
