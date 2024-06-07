import React from 'react';
import newssvg from "/src/assets/svg/news.svg"

const topStories = [
  {
    title: "Arvind Kejriwal को यूं PM Modi ने Bihar में किया खुलासा | Lok Sabha Election 2024",
    views: "2.9K views",
    time: "38 minutes ago",
    channel: "Oneindia Hindi",
    image: "https://i.ytimg.com/vi/pqxEBpBoLqI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDX_a-OJ8v70RytVGhSro734ntAmA",
  },
  {
    title: "PM Modi Speech: चुनाव जीते तो मिलकर लड़ेंगे, हार के लिए दे देंगे, Patliputra में... ",
    views: "494 views",
    time: "33 minutes ago",
    channel: "Republic Bharat",
    image: "https://i.ytimg.com/vi/wNhIyLcrPGs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA07_i_w1HZBCEfSEFjWh9vNJ_ojQ",
  },
  {
    title: "Lok Sabha Election 2024 : PM मोदी का कांग्रेस पर बड़ा हमला, चुनाव की रिजल्ट को...",
    views: "491 views",
    time: "37 minutes ago",
    channel: "News18 India",
    image: "https://i.ytimg.com/vi/XdfIen-8LG0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkPEKNZYXLg4Sg7gwdk2RzPTcE7A",
  },
  {
    title: "PM Modi in Bihar: Karakat में पीएम मोदी ने Tejashwi पर बोला हमला | Lok Sabha...",
    views: "6.6K views",
    time: "58 minutes ago",
    channel: "News18 Bihar Jharkhand",
    image: "https://i.ytimg.com/vi/5zWVdb_gGd0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCI0j5HbAzA_LDvmobcMFMnj0venQ",
  },
];

const latestNews = [
  {
    title: "आखिर किस वजह से बेंगलुरु के लोगों ने अंबेडकर और नेहरू की तस्वीरें फाड़ दीं",
    time: "3 seconds ago",
    channel: "IBC24",
    image: "https://yt3.ggpht.com/6r0ESLWkFvy-ELoQf8kUqlyz5Dz4jShuIhxLhpndUgVgl9TxvpasLnC_-eBehLJhwH9mSODB-dQT1A=s1024-rw-nd-v1",
  },
  {
    title: "#MarketsWithMC : नज़ारा टेक लिमिटेड और मुथूट फाइनेंस लिमिटेड के बारे में जानें",
    time: "1 minute ago",
    channel: "MoneyControl Hindi",
    image: "https://yt3.ggpht.com/ZUlU4ylVyK94OkvuIjMHWfCLB3GYzTiK8cSLH8G-ItKmjgQ9iXLPk3WqdSQ0UMPP491DNVscgOcdBA=s1080-rw-nd-v1",
  },
  {
    title: "#DeshKaMoodMeter #June4WithNavBharat",
    time: "2 minutes ago",
    channel: "TIMES NOW Navbharat",
    image: "https://yt3.ggpht.com/M7CDc2aG-Onx8s8HiTJztX85Ata7qa2eB7eZ5Gq-2xndJs85rwMRYU5SyfDbHRtfgsOeMzvzEVxj=s1080-rw-nd-v1",
  },
  {
    title: "LIVE: बैंकिंग सेक्टर की आज की ताज़ा खबरें | जानिए आज की बड़ी खबरें",
    time: "4 minutes ago",
    channel: "ABP NEWS",
    image: "https://c.ndtvimg.com/2022-09/4jr438pk_rupee-collapses_160x120_26_September_22.jpg?downsize=260:195",
  },
];

const News = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white md:mb-auto mb-20">
      <div className='flex items-center gap-2 m-2 mb-6'>
        <img className='invert border rounded-full p-3 bg-green-400' width="70px" src={newssvg} alt="news" />
        <h2 className="text-4xl font-bold">News</h2>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">मोदी और PM के बारे में खबरें</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topStories.map((story, index) => (
            <div key={index} className="rounded-lg overflow-hidden hover:bg-icon-color hover:cursor-pointer p-2">
              <img src={story.image} alt={story.title} className="w-full h-35 rounded-lg" />
              <div className="mt-2">
                <h3 className="text-sm md:text-md font-semibold">{story.title}</h3>
                <p className="text-xs text-[#aaa]">{story.channel} • {story.views}</p>
                <p className="text-xs text-[#aaa]">{story.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Latest news posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {latestNews.map((news, index) => (
            <div key={index} className="rounded-lg overflow-hidden items-center p-2 hover:bg-icon-color hover:cursor-pointer">
              <div>
                <center>
                  <img src={news.image} alt={news.title} className="w-full h-44 md:h-28 rounded-lg object-cover mr-4 mb-2" />
                </center>
                <h3 className="text-sm font-semibold">{news.title}</h3>
                <p className="text-xs text-[#aaa]">{news.channel} • {news.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;