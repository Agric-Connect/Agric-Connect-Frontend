import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';
import { avocado, banana, carrot2, corn2, cucumber, fish, grapes, strawberry } from '../../assets';

// Use placeholder image URL for testing
const placeholderImage = "https://via.placeholder.com/300";

const produceData = [
    { id: 1, name: "Green Avocado", price: "20 GHC", location: "Kumasi", img: avocado || placeholderImage },
    { id: 2, name: "Fresh Red Seedless Grapes", price: "50 GHC", location: "Tamale", img: grapes || placeholderImage },
    { id: 3, name: "Organic Cucumber", price: "10 GHC", location: "Akum Oda", img: cucumber || placeholderImage },
    { id: 4, name: "Fresh Banana", price: "25 GHC", location: "Konongo", img: banana || placeholderImage },
    { id: 5, name: "Fresh Fish", price: "15 GHC", location: "Accra", img: fish || placeholderImage },
    { id: 6, name: "Organic Strawberry", price: "80 GHC", location: "Keta", img: strawberry || placeholderImage },
    { id: 7, name: "Organic Carrot", price: "50 GHC", location: "Edwura", img: carrot2 || placeholderImage },
    { id: 8, name: "Sweet Corn", price: "90 GHC", location: "Aburi", img: corn2 || placeholderImage },
];

const ProduceSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <h1 className="text-primary text-2xl font-semibold">BUYER'S CHOICE</h1>
                    <h2 className="text-4xl font-semibold mb-2">Featured Products</h2>
                    <hr className="w-16 mx-auto border-t-2 border-primary" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {produceData.map(produce => (
                        <div key={produce.id} className="relative group p-[30 20 40 20]">
                            {/* Card */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img 
                                    src={produce.img}
                                    alt={produce.name}
                                    className="w-full h-80 object-cover"
                                />
                                <div className="p-5">
                                    <Link to={`/produce/${produce.id}`}>
                                        <h3 className="text-xl font-semibold mb-2 text-center text-primary hover:underline">{produce.name}</h3>
                                    </Link>
                                    <p className="text-lg text-tColor mb-1 text-center">Price: {produce.price}</p>
                                    <p className="text-sm text-gray-600 mb-4 text-center">Farm Location: {produce.location}</p>
                                    <button className="bg-secondary text-tColor font-bold px-4 py-3 rounded ml-[60px] text-[12px]">Contact Farmer</button>
                                </div>
                            </div>

                            {/* Hover Effects  for items to appear at the top*/}
                            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-white border border-gray-300 rounded-full p-2 flex items-center">
                                    <FaHeart className="text-primary text-xl" />
                                    <span className="ml-2 hidden group-hover:inline">Add to wish list</span>
                                </button>
                                <button className="bg-white border border-gray-300 rounded-full p-2 flex items-center">
                                    <FaInfoCircle className="text-primary text-xl" />
                                    <span className="ml-2 hidden group-hover:inline">View details</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProduceSection;
