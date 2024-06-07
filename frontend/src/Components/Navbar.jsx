import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import hamburgersvg from "../assets/svg/hamburger.svg"
import searchsvg from "../assets/svg/search.svg"
import microphonesvg from "../assets/svg/microphone.svg"
import uploadsvg from "../assets/svg/upload.svg"
import notificationsvg from "../assets/svg/notification.svg"
import ytlogo from "../assets/Youtube_logo.png"
import profilegif from "../assets/profile.gif"
import yourchannel from '../assets/svg/your_channel.svg'
import settings from "../assets/svg/settings.svg"
import help from "../assets/svg/help.svg"
import feedback from "../assets/svg/feedback.svg"
import logoutsvg from "../assets/svg/logout.svg"

const Navbar = ({ toggleSidebar, navigateToSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { logout, user, isAuthenticated } = useAuth0();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigateToSearch(searchQuery);
    } else {
      alert("Search box is empty!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const saveUserDetails = async (user) => {
    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log('User details saved successfully');
      } else {
        console.error('Failed to save user details or user details already saved.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      const userDetails = {
        name: user.name,
        email: user.email,
        photo: user.picture,
        loginDate: new Date().toISOString().split('T')[0],
      };
      saveUserDetails(userDetails);
    }
  }, [isAuthenticated, user]);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className='bg-custom-dark w-full px-3 fixed top-0 h-15 z-[2000]'>
        <ul className='flex items-center justify-between'>
          <li className='flex items-center'>
            <img onClick={toggleSidebar} className='invert border border-transparent p-3 fa-bars hover:border hover:rounded-full hover:bg-gray-300 hover:cursor-pointer' src={hamburgersvg} alt="Hamburger" />
            <Link to="/">
              <img className="logo hidden sm:block" width="110px" height="100px" src={ytlogo} alt="YouTube" />
            </Link>
          </li>
          <li className='flex items-center gap-2'>
            <input
              className='sm:min-w-[10rem] md:min-w-[25rem] custom-clear-button rounded-full lg:min-w-[35rem] p-2 bg-custom-dark border border-zinc-600 text-white px-5 focus:border-blue-500 focus:outline-none' type="search" value={searchQuery} id="search" onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder='Search'
              style={{ caretColor: 'initial' }} />
            <button onClick={handleSearch}>
              <img className='invert border border-transparent p-2 hover:border hover:rounded-full hover:bg-gray-300 hover:cursor-pointer' src={searchsvg} alt="Search" />
            </button>
            <img className='hidden lg:block invert border border-transparent p-2 rounded-full bg-gray-300 hover:bg-gray-400 hover:cursor-pointer' src={microphonesvg} alt="Microphone" />
          </li>
          <li className="flex items-center gap-2 relative" ref={dropdownRef}>
            <img
              className="invert border border-transparent p-2 hover:border hover:rounded-full hover:bg-gray-300 hover:cursor-pointer"
              src={uploadsvg}
              alt="Upload Video"
            />
            <img
              className="invert border border-transparent p-2 hover:border hover:rounded-full hover:bg-gray-300 hover:cursor-pointer"
              src={notificationsvg}
              alt="Notifications"
            />
            <div className="relative">
              <img
                width="35px"
                className="border rounded-full m-1 border-transparent hover:cursor-pointer profile-img"
                src={user.picture}
                alt="Logo"
                onClick={() => setIsOpen(!isOpen)}
              />
              {isOpen && (
                <ul className="absolute right-0 mt-2 w-72 bg-[#282828] rounded-xl shadow-md z-10 text-white">
                  <li className='text-center my-2'>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </li>
                  <a target='_blank' href="https://portfolioofdivyansh.netlify.app"><li className="px-4 py-3 rounded-xl hover:bg-[#404040] cursor-pointer flex gap-3 items-center hover:font-semibold"><img width="30px" className='rounded-full' src={profilegif} alt="Profile" />My Portfolio</li></a>
                  <Link to="/your_channel"><li onClick={closeDropdown} className="px-4 py-3 rounded-xl hover:bg-[#404040] cursor-pointer flex gap-4 items-center hover:font-semibold"><img className='invert' src={yourchannel} alt="Your Channel" />Your Channel</li></Link>
                  <Link to="/settings"><li onClick={closeDropdown} className="px-4 py-3 rounded-xl hover:bg-[#404040] cursor-pointer flex gap-4 items-center hover:font-semibold"><img className='invert' src={settings} alt="Settings" />Settings</li></Link>
                  <Link to="/help"><li onClick={closeDropdown} className="px-4 py-3 rounded-xl hover:bg-[#404040] cursor-pointer flex gap-4 items-center hover:font-semibold"><img className='invert' src={help} alt="Help" />Help</li></Link>
                  <Link to="/feedback"><li onClick={closeDropdown} className="px-4 py-3 rounded-xl hover:bg-[#404040] cursor-pointer flex gap-4 items-center hover:font-semibold"><img className='invert' src={feedback} alt="Feedback" />Send feedback</li></Link>
                  <li onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="px-5 py-3 rounded-xl hover:bg-[#404040] cursor-pointer flex gap-4 items-center hover:font-semibold">
                    <img className='invert' width="18px" src={logoutsvg} alt="Logout" />Log Out
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
