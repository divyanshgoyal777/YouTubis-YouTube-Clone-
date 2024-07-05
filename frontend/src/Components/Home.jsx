import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import vrgamers from "/src/assets/img/vrgamersofficial.jpg";

const apiKeys = [
    // Enter your keys
];

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageToken, setPageToken] = useState('');
    const [currentApiKeyIndex, setCurrentApiKeyIndex] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [allKeysExhausted, setAllKeysExhausted] = useState(false);
    const observer = useRef(null);

    const fetchVideos = async (retry = false) => {
        if (!hasMore || allKeysExhausted) return;

        try {
            const apiKey = apiKeys[currentApiKeyIndex];
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCEkpcBf98yrv4BAWaij3deA&part=snippet,id&order=date&maxResults=5${pageToken}`
            );
            const newVideos = response.data.items.map((video) => {
                const publishTime = new Date(video.snippet.publishTime);
                const currentTime = new Date();
                const timeDifference = Math.floor((currentTime - publishTime) / (1000 * 60 * 60 * 24));
                let formattedTime;
                if (timeDifference < 1) {
                    formattedTime = 'Today';
                } else if (timeDifference < 2) {
                    formattedTime = 'Yesterday';
                } else if (timeDifference < 30) {
                    formattedTime = `${timeDifference} days ago`;
                } else if (timeDifference < 365) {
                    formattedTime = `${Math.floor(timeDifference / 30)} months ago`;
                } else {
                    formattedTime = `${Math.floor(timeDifference / 365)} years ago`;
                }
                return {
                    ...video,
                    publishTime: formattedTime,
                };
            });
            setVideos((prevVideos) => [...prevVideos, ...newVideos]);
            setPageToken(`&pageToken=${response.data.nextPageToken}`);
            setHasMore(!!response.data.nextPageToken);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching videos', error);
            if (!retry && currentApiKeyIndex < apiKeys.length - 1) {
                setCurrentApiKeyIndex((prevIndex) => prevIndex + 1);
            } else {
                setAllKeysExhausted(true);
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchVideos();
    }, [currentApiKeyIndex]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observerCallback = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !loading && hasMore) {
                setLoading(true);
                fetchVideos();
            }
        };

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(observerCallback, options);
        const observerElement = document.querySelector('#observer');
        if (observerElement) {
            observer.current.observe(observerElement);
        }

        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, [loading, hasMore]);

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap -mx-3">
                {loading && videos.length === 0 ? (
                    <div className="text-center mt-52 w-[80vw]">
                        <div role="status">
                            <svg
                                aria-hidden="true"
                                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                            <br />
                            {allKeysExhausted ? (
                                <p className="text-red-500">All API keys have reached their quota limit. Please try again later.</p>
                            ) : (
                                <p className="text-red-500">Due to exceeding requests, the quota of the API has been reached. Switching keys...</p>
                            )}
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    videos.map((video, index) => (
                        <Link
                            to={`/video/${video.id.videoId}`}
                            key={index}
                            className="card w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-3 hover:cursor-pointer hover:bg-icon-color rounded-xl"
                        >
                            <div className="thumbnail my-3 relative">
                                <img
                                    className="rounded-xl w-full"
                                    src={video.snippet.thumbnails.high.url}
                                    alt={video.snippet.title}
                                />
                            </div>
                            <div className="details flex flex-row mx-1">
                                <div className="channel-logo mr-2">
                                    <img
                                        className="rounded-full"
                                        width="50px"
                                        src={vrgamers}
                                        alt={video.snippet.channelTitle}
                                    />
                                </div>
                                <div>
                                    <p className="title font-bold">{video.snippet.title}</p>
                                    <p className="channel text-sm md:text-xs text-[#aaa] hover:text-white">{video.snippet.channelTitle}</p>
                                    <div className="flex text-sm md:text-xs gap-1 text-[#aaa]">
                                        <p className="views">2.9M views</p>
                                        <p>•</p>
                                        <p className="time">{video.publishTime}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
            <div id="observer" style={{ height: '30px' }}></div>
        </div>
    );
};

export default Home;
