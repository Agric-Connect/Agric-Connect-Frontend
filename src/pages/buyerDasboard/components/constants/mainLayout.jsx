import React from 'react';
import BuyerSidebar from '../buyerSidebar';

const MainLayout = ({ children }) => {
    return (
        <div className="flex">
            <BuyerSidebar />
            <main className="flex-1 ml-[300px] p-6 overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
