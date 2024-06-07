import React from 'react'
import fashionbeauty from "/src/assets/svg/fashion.svg"

const featureds = [
  {
    title: "CELINE 22 MEN WINTER 24 SYMPHOINE FANTASTIQYUE/SHOW",
    channel: "CELINE",
    view: '46K',
    duration: '4 days ago',
    image: "https://i.ytimg.com/vi/Z1MLofSV8cc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCW38M77BwbPtA7BZZdDAlmNFEn_A",
  },
];

const metGalas = [
  {
    title: "Live at Met Gala 2024 with Vogue",
    channel: "Vogue",
    view: '13M',
    duration: '2 weeks ago',
    image: "https://i.ytimg.com/vi/JGVq7J5_sTk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBSL9n_DXsnWaN5FcDLDAqwyfg9Q",
  },
  {
    title: "Tyla Embodies an Hourglass at the Met | Met Gala 2024",
    channel: "Vogue",
    view: '1.1M',
    duration: '2 weeks ago',
    image: "https://i.ytimg.com/vi/-RC_TKi5ecc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzxeJCRh2bPKoeMl6g6mkO-P877A",
  },
  {
    title: "Jennie on Her Getting Ready Playlist for the Met Gala | Met Gala 2024",
    channel: "Vogue",
    view: '2M',
    duration: '2 weeks ago',
    image: "https://i.ytimg.com/vi/YtFwETAYtBg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuNsw_ihf2yYXnGImk_5fBBAwiyw",
  },
  {
    title: "Carbi B Needs 7 People to Help Carry Her Dress | Met Gala 2024",
    channel: "Vogue",
    view: '449K',
    duration: '2 weeks ago',
    image: "https://i.ytimg.com/vi/Z1MLofSV8cc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCW38M77BwbPtA7BZZdDAlmNFEn_A",
  },
];

const FashionBeauty = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white md:mb-auto mb-20">
      <div className='flex items-center gap-2 m-2 mb-6'>
        <img className='invert border rounded-full p-3 bg-green-400' width="70px" src={fashionbeauty} alt="Fashion & Beauty" />
        <h2 className="text-4xl font-bold">Fashion & Beauty</h2>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Featured</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {featureds.map((featured, index) => (
            <div key={index} className="flex flex-col items-start hover:bg-icon-color hover:cursor-pointer p-2 rounded-lg">
              <img src={featured.image} alt={featured.title} className="rounded-lg mb-2" />
              <h4 className="text-sm md:text-md font-semibold">{featured.title}</h4>
              <p className="text-xs text-[#aaa]">{featured.channel}</p>
              <p className="text-xs text-[#aaa]">{featured.view} views • {featured.duration}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">2024 Met Gala</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {metGalas.map((metGala, index) => (
            <div key={index} className="flex flex-col items-start hover:bg-icon-color hover:cursor-pointer p-2 rounded-lg">
              <img src={metGala.image} alt={metGala.title} className="w-full h-auto rounded-lg mb-2" />
              <h4 className="text-sm md:text-md font-semibold">{metGala.title}</h4>
              <p className="text-xs text-[#aaa]">{metGala.channel}</p>
              <p className="text-xs text-[#aaa]">{metGala.view} views • {metGala.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FashionBeauty
