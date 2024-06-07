import React from 'react';
import svg from "/src/assets/svg/gaming.svg"

const featuredVideos = [
  {
    title: "Street Fighter 6 - Akuma Update Launch Trailer",
    views: "88K views",
    time: "3 days ago",
    image: "https://i.ytimg.com/vi/8dpMbcArOf4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr9Lq0D2w42RE3DxWY8gSPzbsLPA",
  },
  {
    title: "Doctor Saab Karenge Sab Problems ka ilaaj",
    views: "954K views",
    time: "Streamed 1 day ago",
    image: "https://i.ytimg.com/vi/oJTAXrdA1B0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9b33LfLflYOeTBByAL9ajSmxvNA",
  },
  {
    title: "WELCOME TO CALL OF DUTY MODERN WARFARE 3",
    views: "4.2M views",
    time: "4 days ago",
    image: "https://i.ytimg.com/vi/Rjnm-y902UU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKDxT_Zt-QV_N53_7fuic4g8aCsQ",
  },
  {
    title: "JACK CHALLENGED ME FOR LUCKY BLOCK RACE",
    views: "2M views",
    time: "4 days ago",
    image: "https://i.ytimg.com/vi/P0irnxxCKGM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUsZX3fbkWUzYtWHF_RW12xWveRw",
  },
];

const topLiveGames = [
  {
    title: "Mobile Legends",
    viewers: "132K watching worldwide",
    image: "https://yt3.googleusercontent.com/ChIv0Zlb1L1e9kqrXOvKR7OJGmofRPMGvAERXP5LmzdoFkqlBbKyy-wLHoDSovy6JOGGp-Is",
  },
  {
    title: "Valorant",
    viewers: "106K watching worldwide",
    image: "https://yt3.googleusercontent.com/xyrZw1Xw8BdnslDxg-BPVvTsJZ_w2yLrbBofPqdWTqwgIYbEGOgBW33C4BJd-GNx2hxXsCsx7pQ",
  },
  {
    title: "PUBG Mobile",
    viewers: "103K watching worldwide",
    image: "https://yt3.googleusercontent.com/P0R15-c7gBEU2ZlzHpQyvv2pZbAAuiRCBSfWNczmsQUGOQ3SxqVuC9P44VJvruZJK8jfhGr97w",
  },
  {
    title: "Battlegrounds Mobile India",
    viewers: "99K watching worldwide",
    image: "https://yt3.googleusercontent.com/moYUpns5eJKq4RZZ0NLFukEox1mIkmUr0L370Qv_hpX1acs90VzOKHsRCCvCbGERhomXmt5-jg",
  },
  {
    title: "Higgs Domino Island",
    viewers: "46K watching worldwide",
    image: "https://yt3.googleusercontent.com/SWG2_WBx-tEjbsRuCsLi_1pSAknWDQq3uSx1IMz7T0-ubUN_gp8cwPqOzHbguCSettnmmq7C",
  },
  {
    title: "Grand Theft Auto V",
    viewers: "35K watching worldwide",
    image: "https://yt3.googleusercontent.com/zPcJCW97DybOjg6cmCN1MkiS8ryRbI1AUoeVj0dcUet-Vfp1y_f5jIEqgeGcV2k6BaN2OncBjgw",
  },
];

const Gaming = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white md:mb-auto mb-20">
      <div className='flex items-center gap-2 m-2 mb-6'>
        <img className='invert border rounded-full p-3 bg-green-400' width="70px" src={svg} alt="Gaming" />
        <h2 className="text-4xl font-bold">Gaming</h2>
      </div>
      <h2 className="text-2xl font-bold mb-4 mx-2">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {featuredVideos.map((video, index) => (
          <div key={index} className="flex flex-col items-start hover:bg-icon-color hover:cursor-pointer p-2 rounded-lg">
            <img src={video.image} alt={video.title} className=" rounded-lg mb-2 w-full md:w-auto" />
            <h4 className="text-sm md:text-md font-semibold">{video.title}</h4>
            <p className="text-xs text-[#aaa]">{video.channel}</p>
            <p className="text-xs text-[#aaa]">{video.views} • {video.time}</p>
            <p className="text-xs text-[#aaa]"></p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">Top live games</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {topLiveGames.map((game, index) => (
          <div key={index} className=" text-white rounded-lg p-2 hover:bg-icon-color hover:cursor-pointer">
            <img src={game.image} alt={game.title} className="w-full rounded-lg h-52 object-cover" />
            <div className="mt-1">
              <h3 className="text-sm font-semibold">{game.title}</h3>
              <p className="text-xs text-[#aaa]">{game.viewers}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Gaming;
