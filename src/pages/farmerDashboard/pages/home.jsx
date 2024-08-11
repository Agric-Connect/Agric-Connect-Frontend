import React from 'react';
import { FaChartLine, FaSeedling, FaDollarSign, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data for the charts
const salesData = [
    { month: 'Jan', sales: 400 },
    { month: 'Feb', sales: 300 },
    { month: 'Mar', sales: 500 },
    { month: 'Apr', sales: 700 },
    { month: 'May', sales: 600 },
    { month: 'Jun', sales: 800 },
    { month: 'Jul', sales: 650 },
    { month: 'Aug', sales: 900 },
    { month: 'Sep', sales: 750 },
    { month: 'Oct', sales: 850 },
    { month: 'Nov', sales: 700 },
    { month: 'Dec', sales: 950 }
];

const FarmerDashboardHome = () => {
    return (
        <div className="p-6">
            {/* Overview Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-4 rounded shadow-sm flex items-center space-x-4">
                    <FaSeedling className="text-primary text-3xl" />
                    <div>
                        <p className="text-xl font-bold">12</p>
                        <p className="text-gray-500">Total Listings</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow-sm flex items-center space-x-4">
                    <FaChartLine className="text-primary text-3xl" />
                    <div>
                        <p className="text-xl font-bold">8</p>
                        <p className="text-gray-500">Recent Sales</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow-sm flex items-center space-x-4">
                    <FaDollarSign className="text-primary text-3xl" />
                    <div>
                        <p className="text-xl font-bold">$1,200</p>
                        <p className="text-gray-500">Total Earnings</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow-sm flex items-center space-x-4">
                    <FaEnvelope className="text-primary text-3xl" />
                    <div>
                        <p className="text-xl font-bold">3</p>
                        <p className="text-gray-500">Unread Messages</p>
                    </div>
                </div>
            </div>

            {/* Analytics Section */}
            <div className="bg-white p-6 rounded shadow-sm mb-8">
                <h2 className="text-xl font-bold mb-4">Sales Trends</h2>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white p-6 rounded shadow-sm mb-8">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <ul className="space-y-4">
                    <li className="flex justify-between">
                        <p>New listing added: Organic Apples</p>
                        <span className="text-gray-500">2 hours ago</span>
                    </li>
                    <li className="flex justify-between">
                        <p>Sold 20kg of Carrots</p>
                        <span className="text-gray-500">1 day ago</span>
                    </li>
                    <li className="flex justify-between">
                        <p>Message from Buyer: John Doe</p>
                        <span className="text-gray-500">3 days ago</span>
                    </li>
                </ul>
            </div>

            {/* Quick Actions Section */}
            <div className="flex justify-between">
                <Link to="/create" className="bg-primary text-white px-6 py-3 rounded shadow-sm hover:bg-primary-dark">
                    Create New Listing
                </Link>
                <Link to="/messages" className="bg-secondary text-white px-6 py-3 rounded shadow-sm hover:bg-secondary-dark">
                    View Messages
                </Link>
            </div>
        </div>
    );
};

export default FarmerDashboardHome;
