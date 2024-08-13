import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2 } from 'lucide-react';

const BrowseListings = ({ listings, onEdit, onDelete }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Browse Listings</h1>

    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {listings.length === 0 ? (
        <p>No listings available.</p>
      ) : (
        listings.map((listing) => (
          <motion.div
            key={listing.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img src={listing.photos[0]} alt={listing.type} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">{listing.type}</h2>
            <p className="text-gray-700">Quantity: {listing.quantity}</p>
            <p className="text-gray-700">Harvest Date: {new Date(listing.harvestDate).toLocaleDateString()}</p>
            <p className="text-gray-700">Price: GHC {listing.price.toFixed(2)}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => onEdit(listing)}
                className=" text-primary px-4 py-2 rounded"
              >
                <Edit />
              </button>
              <button
                onClick={() => onDelete(listing.id)}
                className=" text-red-500 px-4 py-2 rounded"
              >
                <Trash2 />
              </button>
            </div>
          </motion.div>
        ))
      )}
    </div>
  </div>
);

export default BrowseListings;
