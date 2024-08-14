import React from 'react';
import Sidebar from './sideBar'; 

const MainLayout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-[300px] p-6 overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
