import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoPlayer = () => {
    const { videoId } = useParams();
    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyB4vkLWoxkEiW_rgwVUqGQePLp_FWZN5Fw&part=snippet`
                );
                setVideoDetails(response.data.items[0].snippet);
            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        };

        fetchVideoDetails();
    }, [videoId]);

    return (
        <div className="video-player-container container">
            <center>
                <iframe
                    width="80%"
                    height="500px"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video Player"
                ></iframe>
            </center>
            <div>
                {videoDetails && (
                    <div className="mt-6">
                        <h2 className="text-center text-lg font-bold mb-2">{videoDetails.title}</h2>
                        <p className="text-gray-600">{videoDetails.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoPlayer;