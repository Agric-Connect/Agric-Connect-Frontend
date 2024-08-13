import React, { useState } from 'react';

const CreateListingForm = ({ onSave, initialData }) => {
  const [formData, setFormData] = useState({
    type: initialData?.type || '',
    quantity: initialData?.quantity || '',
    harvestDate: initialData?.harvestDate || '',
    price: initialData?.price || '',
    photos: initialData?.photos || [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photos: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{initialData ? 'Edit Listing' : 'Create Listing'}</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Harvest Date</label>
        <input
          type="date"
          name="harvestDate"
          value={formData.harvestDate}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price (GHC)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Photos</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mt-1 p-2 block w-full border rounded-md"
        />
      </div>

      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        {initialData ? 'Update Listing' : 'Create Listing'}
      </button>
    </form>
  );
};

export default CreateListingForm;
