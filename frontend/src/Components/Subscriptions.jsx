import React from 'react';
import { Link } from "react-router-dom";
import googleImg from '/src/assets/img/google.jpg';
import microsoftImg from '/src/assets/img/microsoft.jpg';
import windowsImg from '/src/assets/img/windows.jpg';
import vrgamersofficialImg from '/src/assets/img/vrgamersofficial.jpg';
import codewithharryImg from '/src/assets/img/codewithharry.jpg';
import apnacollegeImg from '/src/assets/img/apnacollege.jpg';
import tseriesImg from '/src/assets/img/t-series.jpg';

const Subscriptions = () => {
  const subscribedChannels = [
    { id: 1, name: 'Google', thumbnail: googleImg, path: '/user/google' },
    { id: 2, name: 'Microsoft', thumbnail: microsoftImg, path: '/user/microsoft' },
    { id: 3, name: 'Windows', thumbnail: windowsImg, path: '/user/windows' },
    { id: 4, name: 'VR Gamers Official', thumbnail: vrgamersofficialImg, path: '/user/vrgamersofficial' },
    { id: 5, name: 'CodeWithHarry', thumbnail: codewithharryImg, path: '/user/codewithharry' },
    { id: 6, name: 'Apna College', thumbnail: apnacollegeImg, path: '/user/apnacollege' },
    { id: 7, name: 'T-Series', thumbnail: tseriesImg, path: '/user/tseries' },
  ];

  return (
    <div className="container mx-auto py-6 px-4">
      <h2 className="text-2xl font-bold mb-4">Subscriptions</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {subscribedChannels.map(channel => (
          <Link key={channel.id} to={channel.path}>
            <div className="flex flex-col items-center hover:bg-icon-color p-2 rounded-xl cursor-pointer">
              <img src={channel.thumbnail} alt={channel.name} className="w-3/4 mb-2 rounded-full" />
              <span className="text-sm font-semibold">{channel.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
