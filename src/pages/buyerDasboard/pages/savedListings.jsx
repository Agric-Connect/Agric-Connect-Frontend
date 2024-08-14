import React, { useState } from 'react';
import { FaTh, FaThList, FaTrash } from 'react-icons/fa';
import { almond, apple, carrot, cassava, corn, orange, peanut, potato, rice, wheat } from '../../../assets';

const initialSavedData = [
  { id: 1, image: apple, name: 'Apples', category: 'Fruits', harvestDate: '2024-07-10', price: 'GHC 20' },
  { id: 2, image: carrot, name: 'Carrots', category: 'Vegetables', harvestDate: '2024-06-15', price: 'GHC 15' },
  { id: 3, image: cassava, name: 'Cassava', category: 'Roots and Tubers', harvestDate: '2024-08-01', price: 'GHC 25' },
  { id: 4, image: rice, name: 'Rice', category: 'Grains', harvestDate: '2024-07-20', price: 'GHC 18' },
];

const SavedListings = () => {
  const [viewType, setViewType] = useState('grid');
  const [savedData, setSavedData] = useState(initialSavedData);

  const handleRemove = (id) => {
    // Remove item from saved listings
    const updatedData = savedData.filter(item => item.id !== id);
    setSavedData(updatedData);
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Saved Listings</h1>

        {/* View Toggle */}
        <div className="flex space-x-2">
          <button
            onClick={() => setViewType('grid')}
            className={`p-2 rounded-lg ${viewType === 'grid' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            <FaTh />
          </button>
          <button
            onClick={() => setViewType('list')}
            className={`p-2 rounded-lg ${viewType === 'list' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            <FaThList />
          </button>
        </div>
      </div>

      {/* Saved Listings */}
      <div className={`grid ${viewType === 'grid' ? 'grid-cols-3' : 'grid-cols-1'} gap-6`}>
        {savedData.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={item.image} alt={item.name} className="h-32 w-32 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-gray-800">{item.harvestDate}</p>
            <p className="text-green-600 font-bold">{item.price}</p>
            <button
              onClick={() => handleRemove(item.id)}
              className="mt-4 p-2 bg-red-500 text-white rounded-lg flex items-center"
            >
              <FaTrash className="mr-2" /> Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedListings;
