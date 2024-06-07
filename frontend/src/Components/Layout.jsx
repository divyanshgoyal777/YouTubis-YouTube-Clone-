import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const navigateToSearch = (query) => {
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
    };

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsSidebarCollapsed(true);
        } else {
            setIsSidebarCollapsed(false);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Navbar navigateToSearch={navigateToSearch} toggleSidebar={toggleSidebar}/>
            <div className="flex">
                <Sidebar isCollapsed={isSidebarCollapsed} />
                <main className="flex-grow text-white h-full bg-custom-dark mt-[58px]">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Layout;
