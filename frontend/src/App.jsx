import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import NoNetworkPage from './Components/NoNetwork';
import Home from './Components/Home';
import Subscriptions from './Components/Subscriptions';
import Shorts from './Components/Shorts';
import Your_Channel from './Components/Your_Channel';
import History from './Components/History';
import Playlists from './Components/Playlists';
import Your_Videos from './Components/Your_Videos';
import WatchLater from './Components/Watch_later';
import Liked_Videos from './Components/Liked_Videos';
import You from './Components/You';
import User from './Components/User';
import Trending from './Components/Trending';
import Shopping from './Components/Shopping';
import Music from './Components/Music';
import Movies from './Components/Movies';
import Live from './Components/Live';
import Gaming from './Components/Gaming';
import News from './Components/News';
import Sports from './Components/Sports';
import Courses from './Components/Courses';
import FashionBeauty from './Components/FashionBeauty';
import Podcasts from './Components/Podcasts';
import Settings from './Components/Settings';
import Report from './Components/Report';
import Help from './Components/Help';
import Feedback from './Components/Feedback';
import VideoPlayer from './Components/VideoPlayer';
import Search from './Components/Search';
import SearchVideoPlayer from './Components/SearchVideoPlayer';
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (!isOnline) {
    return <NoNetworkPage />;
  }
  if (isLoading || !isAuthenticated) {
    return <div className='flex h-screen justify-center items-center'>
      <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  }

  return (
    isAuthenticated ? (
      <Router>
        < Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/video/:videoId" element={<VideoPlayer />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="shorts" element={<Shorts />} />
            <Route path="your_channel" element={<Your_Channel />} />
            <Route path="user/:id" element={<User />} />
            <Route path="history" element={<History />} />
            <Route path="playlists" element={<Playlists />} />
            <Route path="your_videos" element={<Your_Videos />} />
            <Route path="watch_later" element={<WatchLater />} />
            <Route path="liked_videos" element={<Liked_Videos />} />
            <Route path="you" element={<You />} />
            <Route path="trending" element={<Trending />} />
            <Route path="shopping" element={<Shopping />} />
            <Route path="music" element={<Music />} />
            <Route path="movies" element={<Movies />} />
            <Route path="live" element={<Live />} />
            <Route path="gaming" element={<Gaming />} />
            <Route path="news" element={<News />} />
            <Route path="sports" element={<Sports />} />
            <Route path="courses" element={<Courses />} />
            <Route path="fashionbeauty" element={<FashionBeauty />} />
            <Route path="podcasts" element={<Podcasts />} />
            <Route path="settings" element={<Settings />} />
            <Route path="report" element={<Report />} />
            <Route path="help" element={<Help />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="search" element={<Search />} />
            <Route path="/video" element={<SearchVideoPlayer />} />
          </Route>
        </Routes >
      </Router >
    ) : (
      <div>
        <button className='text-white' onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    )
  );
};

export default App;
