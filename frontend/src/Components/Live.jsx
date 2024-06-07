import React from 'react';
import svg from "/src/assets/svg/live.svg"

const liveNow = [
  {
    title: '[HINDI] BGIS 2024 | ROUND 4 | Day 3 | BGMI',
    channel: 'KRAFTON INDIA ESPORTS',
    viewers: '103K watching',
    imgSrc: 'https://i.ytimg.com/vi/7sutAzFrI3g/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2J56KSEIge45yuYQtiKzCzTUHlg',
  },
  {
    title: 'Aaj Tak LIVE TV: Lok Sabha Election 2024 Phase 6 Voting Live Updates',
    channel: 'Aaj Tak',
    viewers: '48K watching',
    imgSrc: 'https://i.ytimg.com/vi/Nq2wYlWFucg/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDq0DXjZkSWBLfxaZ5S9yDbJIdChA',
  },
  {
    title: 'Day 3: श्री देव महादेव शिव महापुराण कथा | Guru ji',
    channel: 'SKU Shiv Katha Upay',
    viewers: '4.1K watching',
    imgSrc: 'https://i.ytimg.com/vi/iAGvDDZDbOM/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFoDS-tgYfKEHYBggz6Ki50DO9rA',
  },
  {
    title: 'LIVE - (DAY-4) - श्रीमद्भागवत कथा | Aniruddhacharya ji',
    channel: 'Aniruddhacharya ji',
    viewers: '6.1K watching',
    imgSrc: 'https://i.ytimg.com/vi/aFfKzZm14aQ/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzlZXbryE1YUT7_oQNlgvSkzUmWg',
  },
];

const recentLiveStreams = [
  {
    title: 'PM Modi Exclusive Interview',
    channel: 'India TV Ap Ki Adalat',
    views: '3.9M views • Streamed 1 day ago',
    imgSrc: 'https://i.ytimg.com/vi/PIJy2-lpwuk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtniB8WY5Q7NVbpAt_0kal1G3nvQ',
  },
  {
    title: '[HINDI] BGIS 2024 | ROUND 4 | Day 1 | BGMI',
    channel: 'KRAFTON INDIA ESPORTS',
    views: '1.5M views • Streamed 3 days ago',
    imgSrc: 'https://i.ytimg.com/vi/1jbr9BP_85g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnginInRt_Kv3gChT9IPk4V3DTFg',
  },
  {
    title: 'LIVE: Maa Vaishno Devi Aarti From Bhawan',
    channel: 'Shraddha MH ONE',
    views: '105K views • Streamed 7 hours ago',
    imgSrc: 'https://i.ytimg.com/vi/rqfgeFvVPEc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbcLx1LEG65kaRafLfok3KfePoxQ',
  },
  {
    title: 'All Rounder Boy ASR is live',
    channel: 'All Rounder Boy ASR',
    views: '1M views • Streamed 2 days ago',
    imgSrc: 'https://i.ytimg.com/vi/NM3H9WAaxCI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhD2diwBEOjB2Pn1aYEx0mJI-4eA',
  },
];

const Live = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white md:mb-auto mb-20">
      <div className='flex items-center gap-2 m-2 mb-6'>
        <img className='invert border rounded-full p-3 bg-green-400' width="70px" src={svg} alt="live" />
        <h2 className="text-4xl font-bold">Live</h2>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Live Now</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {liveNow.map((stream, index) => (
            <div key={index} className="flex flex-col items-start hover:bg-icon-color hover:cursor-pointer p-2 rounded-lg">
              <img src={stream.imgSrc} alt={stream.title} className=" rounded-lg mb-2" />
              <h4 className="text-sm md:text-md font-semibold">{stream.title}</h4>
              <p className="text-xs text-[#aaa]">{stream.channel}</p>
              <p className="text-xs text-[#aaa]">{stream.viewers}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Recent Live Streams</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {recentLiveStreams.map((stream, index) => (
            <div key={index} className="flex flex-col items-start hover:bg-icon-color hover:cursor-pointer p-2 rounded-lg">
              <img src={stream.imgSrc} alt={stream.title} className="w-full h-auto rounded-lg mb-2" />
              <h4 className="text-sm md:text-md font-semibold">{stream.title}</h4>
              <p className="text-xs text-[#aaa]">{stream.channel}</p>
              <p className="text-xs text-[#aaa]">{stream.views}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Live;
