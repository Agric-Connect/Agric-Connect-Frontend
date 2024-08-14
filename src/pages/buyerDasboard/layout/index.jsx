import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; 
import BuyerSidebar from '../components/buyerSidebar';
import BuyerHeader from '../components/buyerHeader';

const BuyerDashboardLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen">
            <BuyerSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? 'ml-[60px]' : 'ml-[200px]'}`}>
                <BuyerHeader />
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default BuyerDashboardLayout;
