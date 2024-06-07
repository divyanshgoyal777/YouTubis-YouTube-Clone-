import React, { useState, useEffect } from 'react';
import apiKeys from '../Api/keys';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentApiKeyIndex, setCurrentApiKeyIndex] = useState(0);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const apiKey = apiKeys[currentApiKeyIndex];
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCEkpcBf98yrv4BAWaij3deA&maxResults=25&key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch playlists');
        }
        const data = await response.json();
        setPlaylists(data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching playlist:', error);
        if (currentApiKeyIndex < apiKeys.length - 1) {
          setCurrentApiKeyIndex((prevIndex) => prevIndex + 1);
        } else {
          setError('Due to exceeding requests, the quota of the API has been reached. Please try again after some time.');
          setLoading(false);
        }
      }
    };

    if (loading) {
      fetchPlaylists();
    }
  }, [currentApiKeyIndex, loading]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 mx-4">Playlists</h1>
      {loading ? (
        <div className="text-center mt-52 w-full md:w-[80vw]">
          <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <br />
            <p className='text-red-500'>Due to exceeding requests, the quota of the API has been reached. Please try again after some time.</p>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {playlists.map(playlist => (
            <div key={playlist.id} className="p-4 rounded-lg shadow-md md:flex items-center gap-4 hover:bg-icon-color hover:cursor-pointer">
              <img src={playlist.snippet.thumbnails.medium.url} alt={playlist.snippet.title} className="w-30 mb-2 rounded-lg" />
              <div>
                <h2 className="text-lg font-semibold">{playlist.snippet.title}</h2>
                <a href={`https://www.youtube.com/playlist?list=${playlist.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Playlist</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Playlists;