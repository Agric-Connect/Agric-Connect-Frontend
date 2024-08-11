import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaQuestionCircle, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { logo } from '../../../assets';

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4 flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img src={logo} alt="Logo" className="h-8 pl-16" />
            </div>

            <div className="flex-1"></div>

            <div className="relative group">
                <FaUserCircle className="text-3xl text-gray-600 cursor-pointer hover:text-gray-800" />
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                        Profile
                    </Link>
                </div>
            </div>

            <Link
                to="/notifications"
                className="text-gray-600 p-2 rounded-full hover:bg-gray-200"
            >
                <FaBell className="text-xl" />
            </Link>

            <Link
                to="/support"
                className="text-gray-600 p-2 rounded-full hover:bg-gray-200"
            >
                <FaQuestionCircle className="text-xl" />
            </Link>

            <Link
                to="/logout"
                className="text-gray-600 p-2 rounded-full hover:bg-gray-200"
            >
                <FaSignOutAlt className="text-xl" />
            </Link>
        </header>
    );
};

export default Header;
