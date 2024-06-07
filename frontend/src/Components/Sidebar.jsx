import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from '/src/assets/svg/home.svg';
import shortsIcon from '/src/assets/svg/shorts.svg';
import subscriptionsIcon from '/src/assets/svg/subscriptions.svg';
import youIcon from '/src/assets/svg/you.svg';
import homeFullIcon from '/src/assets/svg/home_fullsidenav.svg';
import yourChannelIcon from '/src/assets/svg/your_channel.svg';
import historyIcon from '/src/assets/svg/history.svg';
import playlistsIcon from '/src/assets/svg/playlists.svg';
import yourVideosIcon from '/src/assets/svg/your_videos.svg';
import watchLaterIcon from '/src/assets/svg/watch_later.svg';
import likedVideosIcon from '/src/assets/svg/liked_videos.svg';
import trendingIcon from '/src/assets/svg/trending.svg';
import shoppingIcon from '/src/assets/svg/shopping.svg';
import musicIcon from '/src/assets/svg/music.svg';
import moviesIcon from '/src/assets/svg/movies.svg';
import liveIcon from '/src/assets/svg/live.svg';
import gamingIcon from '/src/assets/svg/gaming.svg';
import newsIcon from '/src/assets/svg/news.svg';
import sportsIcon from '/src/assets/svg/sports.svg';
import coursesIcon from '/src/assets/svg/courses.svg';
import fashionIcon from '/src/assets/svg/fashion.svg';
import podcastsIcon from '/src/assets/svg/podcasts.svg';
import ytPremiumIcon from '/src/assets/svg/yt_premium.svg';
import ytStudioIcon from '/src/assets/svg/yt_studio.svg';
import ytMusicIcon from '/src/assets/svg/yt_music.svg';
import ytKidsIcon from '/src/assets/svg/yt_kids.svg';
import settingsIcon from '/src/assets/svg/settings.svg';
import reportIcon from '/src/assets/svg/report.svg';
import helpIcon from '/src/assets/svg/help.svg';
import feedbackIcon from '/src/assets/svg/feedback.svg';
import googleImg from '/src/assets/img/google.jpg';
import microsoftImg from '/src/assets/img/microsoft.jpg';
import windowsImg from '/src/assets/img/windows.jpg';
import vrgamersofficialImg from '/src/assets/img/vrgamersofficial.jpg';
import codewithharryImg from '/src/assets/img/codewithharry.jpg';
import apnacollegeImg from '/src/assets/img/apnacollege.jpg';
import tseriesImg from '/src/assets/img/t-series.jpg';

const Sidebar = ({ isCollapsed: propIsCollapsed }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        setIsCollapsed(propIsCollapsed);
    }, [propIsCollapsed]);

    const handleLinkClick = () => {
        if (window.innerWidth < 768 && !isCollapsed) {
            setIsCollapsed(true);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`side-navbar ${isCollapsed ? 'collapsed' : ''}`}>
            {isCollapsed ? (
                <div className="collapsed-content flex flex-col md:w-20 text-white h-screen bg-custom-dark mt-14">
                    <ul className="flex flex-row md:flex-col md:static md:w-auto bg-custom-dark z-50 fixed bottom-0 w-[100vw] justify-around mt-3 p-1 text-[10px]">
                        <Link to="/">
                            <li className={`p-3 text-center flex flex-col gap-2 hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/' ? 'active' : ''}`}>
                                <img className="invert w-11 md:w-auto" src={homeIcon} alt="home" />
                                <span>Home</span>
                            </li>
                        </Link>
                        <Link to="/shorts">
                            <li className={`p-3 gap-3 items-center flex flex-col hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/shorts' ? 'active' : ''}`}>
                                <img className="invert" src={shortsIcon} alt="shorts" />
                                <span>Shorts</span>
                            </li>
                        </Link>
                        <Link to="/subscriptions">
                            <li className={`p-3 gap-3 items-center flex flex-col hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/subscriptions' ? 'active' : ''}`}>
                                <img className="invert" src={subscriptionsIcon} alt="subscriptions" />
                                <span>Subscriptions</span>
                            </li>
                        </Link>
                        <Link to="/you">
                            <li className={`p-3 gap-3 items-center flex flex-col hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/you' ? 'active' : ''}`}>
                                <img className="invert" src={youIcon} alt="you" />
                                <span>You</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            ) : (
                <div className="expanded-content fixed h-full md:h-auto overflow-y-scroll top-0 md:static flex flex-col w-60 z-[1000] text-white bg-custom-dark mt-12">
                    <div className="flex-grow h-full md:h-screen md:overflow-y-scroll">
                        <ul className="flex flex-col p-3 text-sm">
                            <Link to="/" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/' ? 'active' : ''}`}>
                                    <img className="invert" src={homeFullIcon} alt="home" />
                                    <span>Home</span>
                                </li>
                            </Link>
                            <Link to="/shorts" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/shorts' ? 'active' : ''}`}>
                                    <img className="invert" src={shortsIcon} alt="shorts" />
                                    <span>Shorts</span>
                                </li>
                            </Link>
                            <Link to="/subscriptions" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/subscriptions' ? 'active' : ''}`}>
                                    <img className="invert" src={subscriptionsIcon} alt="subscriptions" />
                                    <span>Subscriptions</span>
                                </li>
                            </Link>
                            <hr className="border-gray-700 my-2" />
                            <Link to="/you" onClick={handleLinkClick}>
                                <p className="font-bold mx-3 my-1">You <i style={{ fontSize: "0.8rem" }} className="fa-solid fa-chevron-right"></i></p>
                            </Link>
                            <Link to="/your_channel" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/your_channel' ? 'active' : ''}`}>
                                    <img className="invert" src={yourChannelIcon} alt="Your channel" />
                                    <span>Your Channel</span>
                                </li>
                            </Link>
                            <Link to="/history" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/history' ? 'active' : ''}`}>
                                    <img className="invert" src={historyIcon} alt="history" />
                                    <span>History</span>
                                </li>
                            </Link>
                            <Link to="/playlists" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/playlists' ? 'active' : ''}`}>
                                    <img className="invert" src={playlistsIcon} alt="playlists" />
                                    <span>Playlists</span>
                                </li>
                            </Link>
                            <Link to="/your_videos" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/your_videos' ? 'active' : ''}`}>
                                    <img className="invert" src={yourVideosIcon} alt="Your videos" />
                                    <span>Your Videos</span>
                                </li>
                            </Link>
                            <Link to="/watch_later" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/watch_later' ? 'active' : ''}`}>
                                    <img className="invert" src={watchLaterIcon} alt="watch later" />
                                    <span>Watch Later</span>
                                </li>
                            </Link>
                            <Link to="/liked_videos" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/liked_videos' ? 'active' : ''}`}>
                                    <img className="invert" src={likedVideosIcon} alt="Liked Videos" />
                                    <span>Liked Videos</span>
                                </li>
                            </Link>
                            <hr className="border-gray-700 my-2" />
                            <p className="font-bold mx-3 my-1">Subscriptions</p>
                            <Link to="/user/google" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/user/google' ? 'active' : ''}`}>
                                    <img className="rounded-full mr-3" width="20px" src={googleImg} alt="Google" />
                                    <span>Google</span>
                                </li>
                            </Link>
                            <Link to="/user/microsoft" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/user/microsoft' ? 'active' : ''}`}>
                                    <img className="rounded-full mr-3" width="20px" src={microsoftImg} alt="Microsoft" />
                                    <span>Microsoft</span>
                                </li>
                            </Link>
                            <Link to="/user/windows" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/user/windows' ? 'active' : ''}`}>
                                    <img className="rounded-full mr-3" width="20px" src={windowsImg} alt="Windows" />
                                    <span>Windows</span>
                                </li>
                            </Link>
                            <Link to="/user/vrgamersofficial" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/user/vrgamersofficial' ? 'active' : ''}`}>
                                    <img className="rounded-full mr-3" width="20px" src={vrgamersofficialImg} alt="VR Gamers Official" />
                                    <span>VR Gamers Official</span>
                                </li>
                            </Link>
                            <Link to="/user/codewithharry" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/user/codewithharry' ? 'active' : ''}`}>
                                    <img className="rounded-full mr-3" width="20px" src={codewithharryImg} alt="Code with Harry" />
                                    <span>CodeWithHarry</span>
                                </li>
                            </Link>
                            <Link to="/user/apnacollege" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/user/apnacollege' ? 'active' : ''}`}>
                                    <img className="rounded-full mr-3" width="20px" src={apnacollegeImg} alt="Apna College" />
                                    <span>Apna College</span>
                                </li>
                            </Link>
                            <Link to="/user/tseries" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/user/t-series' ? 'active' : ''}`}>
                                    <img className="rounded-full mr-3" width="20px" src={tseriesImg} alt="T-Series" />
                                    <span>T-Series</span>
                                </li>
                            </Link>
                            <hr className="border-gray-700 my-2" />
                            <p className="font-bold mx-3 my-1">Explore</p>
                            <Link to="/trending" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/trending' ? 'active' : ''}`}>
                                    <img className="invert" src={trendingIcon} alt="trending" />
                                    <span>Trending</span>
                                </li>
                            </Link>
                            <Link to="/shopping" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/shopping' ? 'active' : ''}`}>
                                    <img className="invert" src={shoppingIcon} alt="shopping" />
                                    <span>Shopping</span>
                                </li>
                            </Link>
                            <Link to="/music" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/music' ? 'active' : ''}`}>
                                    <img className="invert" src={musicIcon} alt="music" />
                                    <span>Music</span>
                                </li>
                            </Link>
                            <Link to="/movies" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/movies' ? 'active' : ''}`}>
                                    <img className="invert" src={moviesIcon} alt="movies" />
                                    <span>Movies</span>
                                </li>
                            </Link>
                            <Link to="/live" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/live' ? 'active' : ''}`}>
                                    <img className="invert" src={liveIcon} alt="live" />
                                    <span>Live</span>
                                </li>
                            </Link>
                            <Link to="/gaming" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/gaming' ? 'active' : ''}`}>
                                    <img className="invert" src={gamingIcon} alt="gaming" />
                                    <span>Gaming</span>
                                </li>
                            </Link>
                            <Link to="/news" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/news' ? 'active' : ''}`}>
                                    <img className="invert" src={newsIcon} alt="news" />
                                    <span>News</span>
                                </li>
                            </Link>
                            <Link to="/sports" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/sports' ? 'active' : ''}`}>
                                    <img className="invert" src={sportsIcon} alt="sports" />
                                    <span>Sports</span>
                                </li>
                            </Link>
                            <Link to="/courses" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/courses' ? 'active' : ''}`}>
                                    <img className="invert" src={coursesIcon} alt="courses" />
                                    <span>Courses</span>
                                </li>
                            </Link>
                            <Link to="/fashionbeauty" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/fashionbeauty' ? 'active' : ''}`}>
                                    <img className="invert" src={fashionIcon} alt="fashion" />
                                    <span>Fashion & Beauty</span>
                                </li>
                            </Link>
                            <Link to="/podcasts" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/podcasts' ? 'active' : ''}`}>
                                    <img className="invert" src={podcastsIcon} alt="podcasts" />
                                    <span>Podcasts</span>
                                </li>
                            </Link>
                            <hr className="border-gray-700 my-2" />
                            <p className="font-bold mx-3 my-1">More from YouTube</p>
                            <a href="https://www.youtube.com/premium" target="_blank">
                                <li className="p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer">
                                    <img width="30px" src={ytPremiumIcon} alt="Premium" />
                                    <span>YouTube Premium</span>
                                </li>
                            </a>
                            <a href="https://studio.youtube.com/" target="_blank">
                                <li className="p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer">
                                    <img width="30px" src={ytStudioIcon} alt="Studio" />
                                    <span>YouTube Studio</span>
                                </li>
                            </a>
                            <a href="https://music.youtube.com/" target="_blank">
                                <li className="p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer">
                                    <img width="30px" src={ytMusicIcon} alt="Music" />
                                    <span>YouTube Music</span>
                                </li>
                            </a>
                            <a href="https://www.youtubekids.com/" target="_blank">
                                <li className="p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer">
                                    <img width="30px" src={ytKidsIcon} alt="Kids" />
                                    <span>YouTube Kids</span>
                                </li>
                            </a>
                            <hr className="border-gray-700 my-2" />
                            <Link to="/settings" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/settings' ? 'active' : ''}`}>
                                    <img className="invert" src={settingsIcon} alt="Settings" />
                                    <span>Settings</span>
                                </li>
                            </Link>
                            <Link to="/report" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/report' ? 'active' : ''}`}>
                                    <img className="invert" src={reportIcon} alt="Report history" />
                                    <span>Report history</span>
                                </li>
                            </Link>
                            <Link to="/help" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/help' ? 'active' : ''}`}>
                                    <img className="invert" src={helpIcon} alt="Help" />
                                    <span>Help</span>
                                </li>
                            </Link>
                            <Link to="/feedback" onClick={handleLinkClick}>
                                <li className={`p-3 flex gap-3 items-center text-white hover:bg-icon-color border-transparent rounded-xl hover:cursor-pointer ${currentPath === '/feedback' ? 'active' : ''}`}>
                                    <img className="invert" src={feedbackIcon} alt="Send feedback" />
                                    <span>Send feedback</span>
                                </li>
                            </Link>
                            <hr className="border-gray-700 my-2" />
                        </ul>
                        <div className="footer flex flex-wrap max-w-4xl mx-auto pl-5 pr-8 text-left text-xs text-gray-400 font-bold">
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="http://www.youtube.com/about/">About</a>
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="https://www.youtube.com/about/press/">Press</a>
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="https://www.youtube.com/about/copyright/">Copyright</a>
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="/t/contact_us/">Contact us</a>
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="https://www.youtube.com/creators/">Creators</a>
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="https://www.youtube.com/ads/">Advertise</a>
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="https://developers.google.com/youtube">Developers</a>
                        </div>
                        <div className="mt-3 footer flex flex-wrap max-w-4xl mx-auto pl-5 pr-8 text-left text-xs text-gray-400 font-bold">
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="https://www.youtube.com/privacy/">Privacy</a>
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="http://www.youtube.com/terms/">Terms</a>
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="https://www.youtube.com/policy/">Policy & Safety</a>
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="https://www.youtube.com/works/">How YouTube works</a>
                            <a className="mr-4 hover:text-gray-300 hover:cursor-pointer" href="https://www.youtube.com/features/">Test new features</a>
                            <p className="my-5 w-full text-gray-600 font-light">&copy; 2024 Google LLC</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
