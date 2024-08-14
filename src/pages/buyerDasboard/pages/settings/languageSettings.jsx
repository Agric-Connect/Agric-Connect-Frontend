import React from 'react';

const LanguageSettings = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Language & Regional Settings</h2>
      <div>
        <label className="block text-gray-700">Language:</label>
        <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
          <option>English</option>
          <option>Twi</option>
          <option>Ga</option>
          <option>Ewe</option>
          <option>Hausa</option>
          <option>Dagbani</option>
          <option>French</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Region:</label>
        <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
          <option>Ashanti</option>
          <option>Bono</option>
          <option>Bono East</option>
          <option>Ahafo</option>
          <option>Central</option>
          <option>Eastern</option>
          <option>Greater Accra</option>
          <option>Northern</option>
          <option>Oti</option>
          <option>Savannah</option>
          <option>Upper East</option>
          <option>Upper West</option>
          <option>Volta</option>
          <option>Western</option>
          <option>Western North</option>
          <option>North East</option>
        </select>
      </div>
      <button className="mt-6 p-2 bg-primary text-white rounded-lg">Save Settings</button>
    </div>
  );
};

export default LanguageSettings;
