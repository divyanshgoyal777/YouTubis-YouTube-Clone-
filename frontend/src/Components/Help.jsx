import React from 'react';
import helpsvg from "/src/assets/svg/help.svg"

const Help = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white md:mb-auto mb-20">
      <div className='flex items-center gap-2 mb-4'>
        <img className='invert border rounded-full p-3 bg-gray-400' width="70px" src={helpsvg} alt="Help" />
        <h2 className="text-4xl font-bold">Help</h2>
      </div>
      <div className="divide-y divide-gray-200">
        <div className="py-2">
          <h3 className="text-lg font-semibold">FAQs</h3>
          <p className="mt-1">Find answers to frequently asked questions below:</p>
          <ul className="mt-2">
            <li>
              <strong>Q:</strong> Home or Playlist or Search Content is not loading?<br />
              <strong>A:</strong> Due to exceeding requests, the quota of the API has been reached. Please try again after some time.
            </li>
            <li>
              <strong>Q:</strong> Is this Website folder on GitHub?<br />
              <strong>A:</strong> The link to the website folder will be available on GitHub after some time.
            </li>
            <li>
              <strong>Q:</strong> Which API did you use to make this website or load content on the home or playlist page?<br />
              <strong>A:</strong> I used the YouTube API provided by Google (YouTube), which is free to use, and you can access youtube channel details with it.
            </li>
          </ul>

        </div>
        <div className="py-2">
          <h3 className="text-lg font-semibold">Contact Me</h3>
          <p className="mt-1">Get in touch with me:</p>
          <p className="mt-1"><strong>Email:</strong> 777divyanshgoyal@gmail.com</p>
          <p className='mt-1'><strong>My Portfolio: </strong><a href="https://portfolioofdivyansh.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://portfolioofdivyansh.netlify.app/</a></p>
        </div>
        <div className="py-2">
          <h3 className="text-lg font-semibold">Follow Me</h3>
          <p className="mt-1">Connect with me on social media:</p>
          <ul className="mt-2 flex gap-2">
            <li><a href="https://www.instagram.com/divyanshgoyal777/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram</a></li>
            <li><a href="https://t.me/divyanshgoyal777" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Telegram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Help;
