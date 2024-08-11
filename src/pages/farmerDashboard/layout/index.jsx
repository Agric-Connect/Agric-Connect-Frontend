import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; 
import Sidebar from '../components/sideBar'; 
import Header from '../components/header'; 

const FarmerDashboardLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? 'ml-[60px]' : 'ml-[200px]'}`}>
                <Header />
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default FarmerDashboardLayout;
