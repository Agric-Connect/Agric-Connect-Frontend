import React from 'react';
import { WHAT_WE_DO_CARDS } from '../../components/constants/index'; 
import Card from './card/card'; // Adjust import path as needed

const WhatWeDo = () => {
    return (
        <section className="py-12 bg-bgColor">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">What We Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {WHAT_WE_DO_CARDS.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            title1={card.title1}
                            title2={card.title2}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
