import React, { useState } from 'react';

const ListingForm = ({ listing, onSave, onCancel }) => {
  const [type, setType] = useState(listing ? listing.type : '');
  const [quantity, setQuantity] = useState(listing ? listing.quantity : '');
  const [harvestDate, setHarvestDate] = useState(listing ? listing.harvestDate : '');
  const [price, setPrice] = useState(listing ? listing.price : '');
  const [photos, setPhotos] = useState(listing ? listing.photos : []);

  const handleSave = () => {
    const updatedListing = {
      id: listing ? listing.id : Date.now(),
      type,
      quantity,
      harvestDate,
      price,
      photos,
    };
    onSave(updatedListing);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{listing ? 'Edit Listing' : 'Add Listing'}</h2>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Harvest Date</label>
        <input
          type="date"
          value={harvestDate}
          onChange={(e) => setHarvestDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Photos (URLs)</label>
        <textarea
          value={photos.join('\n')}
          onChange={(e) => setPhotos(e.target.value.split('\n'))}
          className="w-full p-2 border rounded"
          rows="4"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleSave}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ListingForm;
