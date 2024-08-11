import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';
import { logo } from '../assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-6 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                    <span className="text-2xl font-bold text-primary">AgriConnect</span>
                </Link>
                <div className="hidden md:flex items-center flex-grow justify-center space-x-6">
                    <Link to="/" className="text-tColor hover:text-primary transition duration-300 ease-in-out text-[18px] font-bold">Home</Link>
                    <Link to="/about" className="text-tColor hover:text-primary transition duration-300 ease-in-out text-[18px] font-bold">About</Link>
                    <Link to="/services" className="text-tColor hover:text-primary transition duration-300 ease-in-out text-[18px] font-bold">Services</Link>
                    <Link to="/contact" className="text-tColor hover:text-primary transition duration-300 ease-in-out text-[18px] font-bold">Contact</Link>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    <div className="border-l border-gray-300 h-6"></div>
                    <Link to="/register" className="text-primary hover:underline transition duration-300 ease-in-out text-[18px] font-bold">Register</Link>
                    <Link to="/login" className="text-primary hover:underline transition duration-300 ease-in-out text-[18px] font-bold">Login</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-primary focus:outline-none">
                        <MenuIcon />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="container mx-auto px-4 py-2">
                        <Link to="/" className="block text-tColor hover:text-primary transition duration-300 ease-in-out py-2">Home</Link>
                        <Link to="/about" className="block text-tColor hover:text-primary transition duration-300 ease-in-out py-2">About</Link>
                        <Link to="/services" className="block text-tColor hover:text-primary transition duration-300 ease-in-out py-2">Services</Link>
                        <Link to="/contact" className="block text-tColor hover:text-primary transition duration-300 ease-in-out py-2">Contact</Link>
                        <Link to="/register" className="block text-primary hover:underline transition duration-300 ease-in-out py-2">Register</Link>
                        <Link to="/login" className="block text-primary hover:underline transition duration-300 ease-in-out py-2">Login</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
