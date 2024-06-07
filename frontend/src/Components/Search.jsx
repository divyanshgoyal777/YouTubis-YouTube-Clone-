import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const apiKeys = [
    'AIzaSyB4vkLWoxkEiW_rgwVUqGQePLp_FWZN5Fw',
    'AIzaSyDnK7tG7m9Uoq8oLdpJSFhQDfDT4gZK_Ys',
    'AIzaSyB6K_RXjCsghO8seGZjJI5CWaVI4RXOQOA',
    'AIzaSyCeFBNK2n9yaNphbdJYZlr6WAFUNGdcSYE',
    'AIzaSyAyUWbVxwNdJqwpBYwq0Y3A0Go7BqpY614',
    'AIzaSyDnd6Nam7F7FmwK0DdVr6orja7WQb8W8CA',
    'AIzaSyAB9UIXlsZjpstkjKsiCsBdiffvdaGsue4',
    'AIzaSyDRDwbEp93hu-gZGSeOUByNRhUdPDV20Z4',
    'AIzaSyATOpGrHzIMcH6qzBGqMPQ7ViMzvF-Pttc',
    'AIzaSyA9Ahxx6P_p9stja4PwuTt44a8a4FKxmMk'
];

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [currentApiKeyIndex, setCurrentApiKeyIndex] = useState(0);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('q');
        if (query) {
            setSearchQuery(query);
            handleSearch(query);
        }
    }, [location]);

    const handleSearch = async (query) => {
        if (!query) return;

        try {
            const apiKey = apiKeys[currentApiKeyIndex];
            const response = await axios.get(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${apiKey}`
            );
            setVideos(response.data.items);
            setError(null);
            setRetryCount(0);
        } catch (error) {
            console.error('Error fetching data:', error);

            if (currentApiKeyIndex < apiKeys.length - 1) {
                setCurrentApiKeyIndex(currentApiKeyIndex + 1);
                setRetryCount(retryCount + 1);
            } else {
                setError('Due to exceeding requests, the quota of the API has been reached. Please try again after some time.');
            }
        }
    };

    useEffect(() => {
        if (searchQuery && retryCount < apiKeys.length) {
            handleSearch(searchQuery);
        }
    }, [currentApiKeyIndex]);

    const handleVideoClick = (video) => {
        navigate('/video', { state: { video } });
    };
    return (
        <div className="p-4">
            {error && <div className="text-center mt-52 w-[75vw] text-red-500">{error}</div>}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                {videos.map((video) => {
                    const publishedDate = new Date(video.snippet.publishedAt);
                    const currentTime = new Date();
                    const timeDifference = currentTime - publishedDate;
                    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
                    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
                    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor(timeDifference / (1000 * 60 * 60));

                    return (
                        <div key={video.id.videoId} onClick={() => handleVideoClick(video)} className="lg:flex lg:flex-row hover:bg-icon-color p-2 rounded-lg hover:cursor-pointer">
                            <div className="">
                                <img
                                    src={video.snippet.thumbnails.medium.url}
                                    alt="thumbnail"
                                    className="rounded-lg mr-4 md:w-[400px] lg:w-[500px]"
                                />
                            </div>
                            <div className="lg:flex lg:flex-col md:w-1/2 w-[80vw]">
                                <h2 className="text-md lg:text-lg mb-2">{video.snippet.title}</h2>
                                <p className="text-[#aaa] text-xs mb-1">
                                    {years > 0 ? `${years} year${years > 1 ? 's' : ''} ago` :
                                        months > 0 ? `${months} month${months > 1 ? 's' : ''} ago` :
                                            days > 0 ? `${days} day${days > 1 ? 's' : ''} ago` :
                                                hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''} ago` :
                                                    'Just now'
                                    }
                                </p>
                                <p className="text-[#aaa] text-xs mb-1">{video.snippet.channelTitle}</p>
                                <p className="text-[#aaa] text-xs mb-1">{video.snippet.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Search;
