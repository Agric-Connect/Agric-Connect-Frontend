import React from 'react';
import { useParams } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaStar } from 'react-icons/fa';
import { avocado, banana, carrot2, corn2, cucumber, fish, grapes, strawberry } from '../../assets';

// Placeholder image URL for testing
const placeholderImage = "https://via.placeholder.com/600";

// Sample produce data
const produceData = [
    { 
        id: 1, 
        name: "Green Avocado", 
        price: "20 GHC", 
        location: "Kumasi", 
        img: avocado || placeholderImage, 
        description: "Freshly picked green avocados from Kumasi. Perfect for salads and smoothies.",
        harvestDate: "2024-07-20",
        farmSize: "5 acres",
        estimatedQuantity: "1000 Kg",
        typeOfSeed: "Hass Avocado",
        farmingPractices: "Organic farming, no pesticides used.",
        fertilizerUsed: "Organic compost",
        weedControl: "Manual weeding"
    },
    { 
        id: 2, 
        name: "Fresh Red Seedless Grapes", 
        price: "50 GHC", 
        location: "Tamale", 
        img: grapes || placeholderImage, 
        description: "Juicy red seedless grapes from Tamale. Ideal for snacking or making juice.",
        harvestDate: "2024-06-15",
        farmSize: "3 acres",
        estimatedQuantity: "800 Kg",
        typeOfSeed: "Thompson Seedless",
        farmingPractices: "Integrated pest management",
        fertilizerUsed: "Organic fertilizer",
        weedControl: "Mulching"
    },
    // ... more produce items
];

const relatedProduce = [
    { id: 3, name: "Organic Cucumber", img: cucumber || placeholderImage },
    { id: 4, name: "Fresh Banana", img: banana || placeholderImage },
    { id: 5, name: "Fresh Fish", img: fish || placeholderImage },
    { id: 6, name: "Organic Strawberry", img: strawberry || placeholderImage },
];

const ProduceDetail = () => {
    const { id } = useParams();
    const produce = produceData.find(item => item.id === parseInt(id));

    if (!produce) {
        return <div className="text-center py-12">Produce not found</div>;
    }

    return (
        <div className="bg-gray-100">
            {/* Mini Hero Section */}
            <section className="bg-primary py-8 text-white text-center">
                <h1 className="text-4xl font-bold">{produce.name}</h1>
            </section>

            {/* Produce Details Section */}
            <section className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-lg mt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Image */}
                    <img 
                        src={produce.img} 
                        alt={produce.name} 
                        className="w-full lg:w-1/2 h-auto rounded-lg shadow-md object-cover"
                    />

                    {/* Details */}
                    <div className="lg:w-1/2">
                        <div className="flex items-center mb-4">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-gray-300" />
                            <span className="ml-2 text-gray-600">(4 Reviews)</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">{produce.name}</h2>
                        <p className="text-2xl text-primary font-semibold mb-4">Price: {produce.price}</p>
                        <p className="text-lg mb-2"><strong>Harvesting Date:</strong> {produce.harvestDate}</p>
                        <p className="text-lg mb-2"><strong>Farm Size:</strong> {produce.farmSize}</p>
                        <p className="text-lg mb-2"><strong>Estimated Quantity:</strong> {produce.estimatedQuantity}</p>
                        <p className="text-lg mb-4"><strong>Farm Location:</strong> {produce.location}</p>
                        <p className="text-base text-gray-800 mb-6"><strong>Description:</strong> {produce.description}</p>
                        <p className="text-base text-gray-800 mb-2"><strong>Type of Seed:</strong> {produce.typeOfSeed}</p>
                        <p className="text-base text-gray-800 mb-2"><strong>Farming Practices:</strong> {produce.farmingPractices}</p>
                        <p className="text-base text-gray-800 mb-2"><strong>Fertilizer Used:</strong> {produce.fertilizerUsed}</p>
                        <p className="text-base text-gray-800 mb-4"><strong>Weed Control:</strong> {produce.weedControl}</p>
                        
                        <div className="flex gap-4 mt-6">
                            <button className="bg-secondary text-white font-bold px-4 py-2 rounded flex items-center">
                                <FaPhoneAlt className="mr-2" /> Call Farmer
                            </button>
                            <button className="bg-secondary text-white font-bold px-4 py-2 rounded flex items-center">
                                <FaEnvelope className="mr-2" /> Email Farmer
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Produce Slider */}
            <section className="container mx-auto px-6 py-12 mt-8">
                <h2 className="text-2xl font-bold mb-6">Related Produce</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {relatedProduce.map(item => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProduceDetail;
