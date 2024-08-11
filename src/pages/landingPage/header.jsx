import { LocateIcon, Play } from 'lucide-react';
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-primary text-white py-4">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <p className="text-xl font-semibold">
                        At AgriConnect, we are committed to promoting sustainable and organic farming practices.
                    </p>
                </div>

                <div className="flex justify-center items-center space-x-4 mb-4">
                    <LocateIcon className="text-xl" />
                    <span className="text-lg">Accra, Ghana</span>
                </div>

                <div className="flex justify-center items-center space-x-4 mb-4">
                    <Phone className="text-xl" />
                    <span className="text-lg">+233 24 876 1124</span>
                </div>

                <div className="bg-secondary text-white py-2 px-4 mb-4">
                    <div className="flex justify-center space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook className="text-lg" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter className="text-lg" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <Play className="text-lg" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram className="text-lg" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white my-4"></div>

                <div className="flex justify-center space-x-4">
                    <Link to="/register" className="text-white hover:text-secondary">Register</Link>
                    <Link to="/login" className="text-white hover:text-secondary">Login</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
