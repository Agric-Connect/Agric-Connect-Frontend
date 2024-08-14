import React, { useState } from 'react';
import { FaTh, FaThList, FaSearch } from 'react-icons/fa';
import { almond, apple, carrot, cassava, corn, orange, peanut, potato, rice, wheat } from '../../../assets';

const dummyData = [
  { id: 1, image: apple, name: 'Apples', category: 'Fruits', harvestDate: '2024-07-10', price: 'GHC 20' },
  { id: 2, image: carrot, name: 'Carrots', category: 'Vegetables', harvestDate: '2024-06-15', price: 'GHC 15' },
  { id: 3, image: cassava, name: 'Cassava', category: 'Roots and Tubers', harvestDate: '2024-08-01', price: 'GHC 25' },
  { id: 4, image: rice, name: 'Rice', category: 'Grains', harvestDate: '2024-07-20', price: 'GHC 18' },
  { id: 5, image: wheat, name: 'Wheat', category: 'Cereals', harvestDate: '2024-05-25', price: 'GHC 22' },
  { id: 6, image: almond, name: 'Almonds', category: 'Nuts', harvestDate: '2024-04-10', price: 'GHC 30' },
  { id: 7, image: orange, name: 'Oranges', category: 'Fruits', harvestDate: '2024-06-05', price: 'GHC 18' },
  { id: 8, image: potato, name: 'Potatoes', category: 'Roots and Tubers', harvestDate: '2024-08-15', price: 'GHC 16' },
  { id: 9, image: corn, name: 'Corn', category: 'Grains', harvestDate: '2024-07-30', price: 'GHC 21' },
  { id: 10, image: peanut, name: 'Peanuts', category: 'Nuts', harvestDate: '2024-05-10', price: 'GHC 28' },
];

const BrowseListings = () => {
  const [sortOption, setSortOption] = useState('harvestDate');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewType, setViewType] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const listingsPerPage = 6;

  const sortedData = [...dummyData].sort((a, b) => {
    if (sortOption === 'harvestDate') {
      return new Date(a.harvestDate) - new Date(b.harvestDate);
    } else if (sortOption === 'Price') {
      return parseFloat(a.price.replace('GHC', '')) - parseFloat(b.price.replace('GHC', ''));
    } else if (sortOption === 'Newest') {
      return new Date(b.harvestDate) - new Date(a.harvestDate);
    } else if (sortOption === 'Quantity') {
      return parseFloat(b.quantity) - parseFloat(a.quantity);
    }
    return 0;
  });

  const filteredData = sortedData.filter(item =>
    categoryFilter === 'All' ? true : item.category === categoryFilter
  ).filter(item =>
    searchTerm === '' ? true : item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / listingsPerPage);
  const displayedData = filteredData.slice((currentPage - 1) * listingsPerPage, currentPage * listingsPerPage);

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search listings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          <FaSearch className="absolute top-3 right-3 text-gray-500" />
        </div>

        <div className="flex space-x-4">
          {/* Sorting Options */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="All">Sort</option>
            <option value="harvestDate">Harvest Date</option>
            <option value="Price">Price</option>
            <option value="Newest">Newest</option>
            <option value="Quantity">Quantity</option>
          </select>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="All">Categories</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Roots and Tubers">Roots and Tubers</option>
            <option value="Grains">Grains</option>
            <option value="Cereals">Cereals</option>
            <option value="Nuts">Nuts</option>
          </select>

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

        {/* Pagination */}
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            className="p-2 border rounded"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            className="p-2 border rounded"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Listings */}
      <div className={`grid ${viewType === 'grid' ? 'grid-cols-3' : 'grid-cols-1'} gap-6`}>
        {displayedData.map((item) => (
          <div 
            key={item.id} 
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="h-32 w-32 object-cover mb-4 rounded-lg shadow-sm transition-transform duration-300 ease-in-out" 
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-gray-800">{item.harvestDate}</p>
            <p className="text-green-600 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseListings;
