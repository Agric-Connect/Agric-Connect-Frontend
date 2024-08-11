import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { logo, recentPost1, recentPost2 } from '../assets';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">

                {/* Logo and Newsletter Section */}
                <div className="flex-1 space-y-4">
                    <img src={logo} alt="Logo" className="w-40" />
                    <p className="text-sm">
                        Bringing innovative solutions for sustainable farming. Subscribe to our newsletter to stay updated on our latest news and offers.
                    </p>
                    <div className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-l bg-gray-700 text-white w-full"
                        />
                        <button className="bg-primary text-white px-4 rounded-r hover:bg-primary-dark">
                            Go
                        </button>
                    </div>
                </div>

                {/* Explore Section */}
                <div className="flex-1 space-y-4 pl-[50px]">
                    <h2 className="text-xl font-bold">Explore</h2>
                    <nav className="space-y-2">
                        <Link to="/about" className="block hover:text-secondary">About Us</Link>
                        <Link to="/team" className="block hover:text-secondary">Meet Our Team</Link>
                        <Link to="/services" className="block hover:text-secondary">Services</Link>
                        <Link to="/news" className="block hover:text-secondary">News & Media</Link>
                        <Link to="/contact" className="block hover:text-secondary">Contact Us</Link>
                        <Link to="/volunteers" className="block hover:text-secondary">Volunteers</Link>
                    </nav>
                </div>

                {/* Recent Posts Section */}
                <div className="flex-1 space-y-4 pr-5">
                    <h2 className="text-xl font-bold">Recent Posts</h2>
                    <div className="space-y-4">
                        <div className="flex space-x-4">
                            <img src={recentPost1} alt="Recent Post 1" className="w-16 h-16 object-cover" />
                            <div>
                                <p className="text-sm text-secondary">August 1, 2024</p>
                                <h3 className="text-md font-semibold">Innovative Farming Techniques</h3>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <img src={recentPost2} alt="Recent Post 2" className="w-16 h-16 object-cover" />
                            <div>
                                <p className="text-sm text-secondary">July 24, 2024</p>
                                <h3 className="text-md font-semibold">Sustainable Agriculture Trends</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Info Section */}
                <div className="flex-1 space-y-4 mr-7">
                    <h2 className="text-xl font-bold">Contact Info</h2>
                    <div className="space-y-2">
                        <p className="flex items-center space-x-4">
                            <span className="bg-primary rounded-full w-16 h-10 flex items-center justify-center">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
                            </span>
                            <span>
                                <span className="font-bold">Address: </span>
                                123 Agriculture Ave, Green City, Earth 12345
                            </span>
                        </p>
                        <p className="flex items-center space-x-4">
                            <span className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                            </span>
                            <span>
                                <span className="font-bold">Email: </span>
                                info@agriconnect.com
                            </span>
                        </p>
                        <p className="flex items-center space-x-4">
                            <span className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
                                <FontAwesomeIcon icon={faPhone} className="text-white" />
                            </span>
                            <span>
                                <span className="font-bold">Phone: </span>
                                +1 (123) 456-7890
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                © 2024 AgriConnect. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
