import React from 'react';

const PagesLayout = ({ headerText, buttonText, onClick, children, showButton = true, footerText }) => {
    return (
        <div className="p-6 flex flex-col gap-y-8 min-h-screen">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">{headerText}</h1>
                {showButton && buttonText && (
                    <button
                        className="bg-primary text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
                        onClick={onClick}
                    >
                        {buttonText}
                    </button>
                )}
            </header>
            <main className="flex-grow">
                {children}
            </main>
            {footerText && (
                <footer className="mt-6 text-center text-gray-500">
                    {footerText}
                </footer>
            )}
        </div>
    );
};

export default PagesLayout;
