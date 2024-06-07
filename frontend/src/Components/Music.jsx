import React from 'react';
import svg from "/src/assets/svg/music.svg"

const playlists = [
  {
    title: "India's Biggest Hits",
    items: [
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTel0ELRR5_yJGex-6dsNqJwEJlZ1sgW4Uz51k-RW3bJw&s', title: 'Bollywood Hitlist', description: 'Best of the best from the latest. #hindihits' },
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_T1NPf70BCM4FNNEZVD-tWZPRLT9ocxUMKQ&s', title: 'Punjab Fire', description: 'Your one stop shop for today\'s biggest Punjabi hits. #punjabihits' },
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zE3l-BDQdwlC2BQhFBkznfxJuG321QNrOg&s', title: 'I-Pop Hits!', description: 'Your one stop shop for the biggest Desi Pop hits. #hindipop' },
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMCgSWXaUc6A5VXHQSZn-z1-RkW9WPGNoGw&s', title: 'Tollywood Hitlist', description: 'Your one stop shop for today\'s biggest Telugu hits. #teluguhits' },
    ]
  },
  {
    title: "Discover New Music",
    items: [
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6duAJdvV57p5XqHq7EVGehTloBJ6rbdShw&s', title: 'RELEASED', description: 'The hottest new songs this week, served up fresh to you every Friday.' },
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvmiY6BGKuvDb17v98EIuHH5lOy29ZTBFxw&s', title: 'New Music Hindi', description: 'Listen to brand new Hindi releases of the moment. #bollywood' },
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJv0QS2dC03_ulNw5519e-W-o7BCJtNbYFqg&s', title: 'Pop Before It Breaks', description: 'An essential preview of tomorrow\'s pop hits.' },
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qy7FqNfcxSpmqsDXiShsXwjrQYsDUU4t4Q&s', title: 'New Music Punjabi', description: 'Brand new Punjabi music for your listening pleasure.' },
    ]
  }
];

const Music = () => (
  <div className="max-w-screen-lg mx-auto p-4 text-white md:mb-auto mb-10">
    <div className='flex items-center gap-2 m-2'>
      <img className='invert border rounded-full p-2 bg-green-400' width="70px" src={svg} alt="Music" />
      <h2 className="text-4xl font-bold">Music</h2>
    </div>
    <div className="p-3">
      {playlists.map((section, sectionIndex) => (
        <div key={sectionIndex} className="my-6">
          <h2 className="text-xl font-bold mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="rounded-lg p-2 hover:bg-icon-color hover:cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-40 object-contain" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-[#aaa]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Music;
