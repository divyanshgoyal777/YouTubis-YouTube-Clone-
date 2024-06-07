import React from 'react';
import podcastssvg from "/src/assets/svg/podcasts.svg"

const Podcasts = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white md:mb-auto mb-20">
      <div className='flex items-center gap-2 m-2 mb-4'>
        <img className='invert border rounded-full p-2 bg-green-400' width="70px" src={podcastssvg} alt="Podcasts" />
        <h2 className="text-4xl font-bold">Podcasts</h2>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Popular episodes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          <EpisodeCard
            title="Prashant Kishor Mojo Exclusive | PK On Brand Modi & Who Will Win..."
            channel="Mojo Story"
            views="1.3M views"
            days="6 days ago"
            thumbnail="https://i.ytimg.com/vi/1PshxrZagCc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxexeYadFwwhCZ0EFAydQTFT9PTA"
          />
          <EpisodeCard
            title="BOLD & HONEST - BJP Report Card - Data Backed Analysis | Legendary..."
            channel="BeerBiceps"
            views="241K views"
            days="1 day ago"
            thumbnail="https://i.ytimg.com/vi/WFbdw6UzRvI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-tPj3Lwejb6Q9p3bzjo3wzyOhzQ"
          />
          <EpisodeCard
            title="EP-180 |Diplomacy, Western Media, 2024 Polls, Revanna Passport Row,..."
            channel="ANI News"
            views="262K views"
            days="1 day ago"
            thumbnail="https://i.ytimg.com/vi/FMaZELgqp3E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2cedkh8wIcN_tVgw-ya_Sez8eHQ"
          />
          <EpisodeCard
            title="FM opens up on North vs South, Congress, GST, IncomeTax & India's..."
            channel="Think School"
            views="862K views"
            days="6 days ago"
            thumbnail="https://i.ytimg.com/vi/uKO8tk3_itQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALEw3J456osRU1-MeCxdpRF60-RQ"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Popular podcasts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          <PodcastCard
            title="Inside Out | A Podcast With Barkha Dutt"
            episodes="57 episodes"
            thumbnail="https://i.ytimg.com/vi/y8GDx7mssvM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA56qXewi1-PKE-atqATTqsllmB2g"
          />
          <PodcastCard
            title="The Ranveer Show - All Episodes"
            episodes="396 episodes"
            thumbnail="https://i.ytimg.com/vi/t-g8wyflx8s/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCr-J_yOQGWcbjwV8UIyI6QorTQEg"
          />
          <PodcastCard
            title="Indian Business Podcast"
            episodes="8 episodes"
            thumbnail="https://www.startupinsider.in/wp-content/uploads/2023/06/Untitled-design-67.png"
          />
          <PodcastCard
            title="Ghostly Call Recording by Qriofyte"
            episodes="178 episodes"
            thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KEUIg51AdfmCkktyPnd176epEFkmeEivKw&s"
          />
          <PodcastCard
            title="Rotten Mango"
            episodes="114 episodes"
            thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_vAhCnNFiTFIGjPFx7B1V-fDZyVygxIWrQ&s"
          />
          <PodcastCard
            title="DeshBhakt Conversations with Akash Banerjee"
            episodes="24 episodes"
            thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJIQRviyDgXdqLeOzwQY7Prw0SH2UHHXsJg&s"
          />
        </div>
      </div>
    </div>
  );
};

const EpisodeCard = ({ title, channel, views, days, thumbnail }) => (
  <div className="p-1 rounded-lg hover:bg-icon-color hover:cursor-pointer">
    <div className="aspect-w-16 aspect-h-9">
      <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div className="p-2">
      <h3 className="font-semibold text-sm md:text-md">{title}</h3>
      <p className="text-[#aaa] text-sm">{channel}</p>
      <p className="text-[#aaa] text-sm">{views} • {days}</p>
    </div>
  </div>
);

const PodcastCard = ({ title, episodes, thumbnail }) => (
  <div className="p-2 rounded-lg hover:bg-icon-color hover:cursor-pointer mb-2">
    <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-2">
      <h3 className="font-semibold text-sm md:text-md">{title}</h3>
      <p className="text-[#aaa] text-sm">{episodes}</p>
    </div>
  </div>
);

export default Podcasts;
