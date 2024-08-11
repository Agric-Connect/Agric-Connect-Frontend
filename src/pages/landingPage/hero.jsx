import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { hero1, hero2, hero3, hero4, hero5 } from '../../assets';
import { Leaf } from 'lucide-react';

const images = [
    { src: hero1 },
    { src: hero2 },
    { src: hero3 },
    { src: hero4 },
    { src: hero5 },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${image.src})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentIndex === index ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center pl-10">
                        {/* Animate the primary background div */}
                        <motion.div
                            className="absolute -z-10 w-64 h-32 bg-primary rounded-full"
                            style={{ top: '-10px', left: '-20px' }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                        {/* Animate the "Original & Natural" text */}
                        <motion.h1
                            className="text-secondary text-2xl md:text-4xl font-bold underline decoration-secondary decoration-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Original & Natural
                        </motion.h1>

                        {/* Animate the secondary background div */}
                        <motion.div
                            className="absolute -z-10 w-80 h-40 bg-primary rounded-full"
                            style={{ top: '-20px', left: '-40px' }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        />
                        {/* Animate the "Innovative Solutions" text */}
                        <motion.h2
                            className="text-secondary text-l md:text-7xl font-bold flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            Innovativ<span className="relative">
                                <span>e </span>
                                <Leaf className="absolute top-[-20px] left-0 text-secondary w-12 h-12" />
                            </span>Solutions
                        </motion.h2>

                        {/* Animate the "for Agriculture" text */}
                        <motion.h3
                            className="text-bgColor text-4xl md:text-7xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                        >
                            for Agriculture
                        </motion.h3>

                        {/* Animate the paragraph text */}
                        <motion.p
                            className="text-white text-2xl md:text-xl mb-8 "
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            We bring the best of nature and technology together for sustainable farming.
                        </motion.p>

                        {/* Animate the button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                        >
                            <Link
                                to="/about"
                                className="bg-secondary text-white text-lg md:text-xl py-3 px-2 rounded hover:bg-secondary-dark"
                            >
                                Discover More
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
