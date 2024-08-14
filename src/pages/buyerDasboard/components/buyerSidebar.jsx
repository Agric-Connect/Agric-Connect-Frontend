import React from 'react';
import { Link } from 'react-router-dom';
import { BUYER_NAVLINKS, SOCIAL_LINKS } from './constants/index'; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BuyerSidebar = ({ isCollapsed, setIsCollapsed }) => {
    return (
        <div className={`fixed top-0 left-0 bg-gray-800 text-white h-screen flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-60'}`}>
            {/* Toggle Button and Branding */}
            <div className={`bg-primary text-white p-4 flex items-center justify-between transition-all duration-300 ${isCollapsed ? 'justify-center' : ''}`}>
                {!isCollapsed && <h2 className="text-2xl font-bold">Dashboard</h2>}
                <button 
                    onClick={() => setIsCollapsed(!isCollapsed)} 
                    className="p-2 text-white bg-gray-600 rounded hover:bg-gray-500 transition-colors duration-300"
                >
                    {isCollapsed ? <FaChevronRight className="text-xl" /> : <FaChevronLeft className="text-xl" />}
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
                {BUYER_NAVLINKS.map(({ icon, text, link }) => (
                    <Link 
                        key={link} 
                        to={link} 
                        className={`flex items-center space-x-3 p-2 rounded hover:bg-gray-700 ${isCollapsed ? 'justify-center' : ''}`}
                    >
                        {icon}
                        {!isCollapsed && <span>{text}</span>}
                    </Link>
                ))}
            </nav>

            {/* Footer with Social Links and Cute Text */}
            <div className="bg-gray-700 p-4 flex flex-col items-center">
                <div className="flex space-x-4 mb-2">
                    {SOCIAL_LINKS.map(({ icon, link }) => (
                        <a 
                            key={link} 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white hover:text-gray-400"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
                <p className="text-white text-sm">© 2024 AgriConnect</p>
            </div>
        </div>
    );
};

export default BuyerSidebar;
