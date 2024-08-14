import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { hero2, hero4 } from '../../../assets';

const data = [
    { name: 'Jan', orders: 10, spent: 240 },
    { name: 'Feb', orders: 15, spent: 400 },
    { name: 'Mar', orders: 7, spent: 150 },
    // more data...
];

const BuyerHome = () => {
    return (
        <div className="p-6">
            <motion.h1 
                className="text-3xl font-bold mb-6" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                Welcome back, [Buyer's Name]!
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Orders & Spending Overview */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4 text-primary">Your Activity</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="orders" stroke="#8884d8" />
                            <Line type="monotone" dataKey="spent" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Quick Access Links */}
                <div className="bg-white shadow-md rounded-lg p-4 text-primary text-lg">
                    <h2 className="text-2xl font-semibold mb-4">Quick Access</h2>
                    <ul className="space-y-4">
                        <li><a href="/buyer/browse" className="text-primary hover:underline">Browse Listings</a></li>
                        <li><a href="/buyer/orders" className="text-primary hover:underline">My Orders</a></li>
                        <li><a href="/buyer/wishlist" className="text-primary hover:underline">Wishlist</a></li>
                    </ul>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">Recent Orders</h2>
                <ul className="space-y-2">
                    <li className="border-b pb-2">Order #12345 - Status: Delivered</li>
                    <li className="border-b pb-2">Order #12346 - Status: Pending</li>
                    {/* More recent orders... */}
                </ul>
            </div>

            {/* Recommended Listings */}
            <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
    <div className="grid grid-cols-2 gap-4">
        {/* Example of recommended listings with image and text */}
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
            <img 
                src={hero2} 
                alt="Listing 1" 
                className="w-full h-32 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Organic Tomatoes</h3>
                <p className="text-gray-600">GHC 3.50 per lb</p>
            </div>
        </div>

        <div className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
            <img 
                src={hero4} 
                alt="Listing 2" 
                className="w-full h-32 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Fresh Avocados</h3>
                <p className="text-gray-600">GHC 1.20 each</p>
            </div>
        </div>

        {/* Add more listings as needed */}
    </div>
</div>

        </div>
    );
};

export default BuyerHome;
