import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ icon, title1, title2, description }) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex items-center mb-4">
                <div className="flex justify-center items-center bg-secondary p-4 rounded-full mr-4">
                    {icon}
                </div>
                <div>
                    <h3 className="text-[22px] font-semibold ">
                        {title1} <br /> {title2}
                    </h3>
                </div>
            </div>
            <hr className="my-4 border-t-1 border-primary mx-auto w-3/4" />
            <p className="text-tColor">{description}</p>
        </motion.div>
    );
};

export default Card;
