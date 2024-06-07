import React from 'react'
import sportssvg from "/src/assets/svg/sports.svg"

const liveSports = [
  {
    title: "LIVE! | T1 | Day 3 | WTT Contender Taiyuan 2024 | Semifinals",
    channel: "World Table Tennis",
    viewers: "4.6K watching",
    image: "https://i.ytimg.com/vi/NIHWDiIQA9E/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF_1dGk7Cc1SYybYmYxti0JPz_5Q",
  },
  {
    title: "Saarlandpokalfinale 1. FC Saarbrücken - FC 08 Homburg LIVE",
    channel: "AmateurKlasse",
    viewers: "2.1K watching",
    image: "https://i.ytimg.com/vi/Iq7gG-62Veo/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpahnYI29ebZWkb3_Xwzo2Zm3FDA",
  },
  {
    title: "LIVE | FIBA 3x3 Zhijiang Challenger 2024 | Qualifier for Edmonton Masters",
    channel: "FIBA3AX3 - The 3x3 Basketball Channel",
    viewers: "981 watching",
    image: "https://i.ytimg.com/vi/2aPTHF9MrOg/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUFRzN2mOYpmDOU18CtpNJc0ZKRQ",
  },
  {
    title: "[LIVE] MNL League Cup 2024 (Semi-Final) - Yangon United FC Vs...",
    channel: "Channel K Myanmar",
    viewers: "2.1K watching",
    image: "https://i.ytimg.com/vi/UaM7C3dvp7s/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6-OYpi2ZjVCv6JSESHCS-PdxiCw",
  },
];

const highlights = [
  {
    title: "#5 MAVERICKS at #3 TIMBERWOLVES | FULL GAME 1 HIGHLIGHTS | May 22, 2024",
    channel: "NBA",
    views: "2.7M views • 2 days ago",
    image: "https://i.ytimg.com/vi/6eRyzvXQ3Ug/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1n9fupA6JagaMW5u_fZTV8Z87vw",
  },
  {
    title: "FP2 Highlights | 2024 Monaco Grand Prix",
    channel: "FORMULA 1",
    views: "1.4M views • 17 hours ago",
    image: "https://i.ytimg.com/vi/-7_VjCWlmPA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDokXxthJvyTfNhJoVscnJDY9V96Q",
  },
  {
    title: "FP1 Highlights | 2024 Monaco Grand Prix",
    channel: "FORMULA 1",
    views: "1.4M views • 21 hours ago",
    image: "https://i.ytimg.com/vi/nh_CvRPLc9I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpDyEmXDHob_6SR9NW8cci7a1Qhg",
  },
  {
    title: "HIGHLIGHTS | CHIEFS v HURRICANES | Super Rugby Pacific 2024 | Round 14",
    channel: "SUPER RUGBY PACIFIC & TRC",
    views: "116K views • 1 day ago",
    image: "https://i.ytimg.com/vi/XsUmFLYQk9Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABL83uAvx_JP6PCQALTJQJN--vug",
  },
];

const Sports = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white md:mb-auto mb-20">
      <div className='flex items-center gap-2 m-2 mb-6'>
        <img className='invert border rounded-full p-3 bg-green-400' width="70px" src={sportssvg} alt="Sports" />
        <h2 className="text-4xl font-bold">Sports</h2>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Live Sports</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {liveSports.map((sport, index) => (
            <div key={index} className="flex flex-col items-start hover:bg-icon-color hover:cursor-pointer p-2 rounded-lg">
              <img src={sport.image} alt={sport.title} className=" rounded-lg mb-2" />
              <h4 className="text-sm md:text-md font-semibold">{sport.title}</h4>
              <p className="text-xs text-[#aaa]">{sport.channel}</p>
              <p className="text-xs text-[#aaa]">{sport.viewers}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Highlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex flex-col items-start hover:bg-icon-color hover:cursor-pointer p-2 rounded-lg">
              <img src={highlight.image} alt={highlight.title} className="w-full h-auto rounded-lg mb-2" />
              <h4 className="text-sm md:text-md font-semibold">{highlight.title}</h4>
              <p className="text-xs text-[#aaa]">{highlight.channel}</p>
              <p className="text-xs text-[#aaa]">{highlight.views}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;
