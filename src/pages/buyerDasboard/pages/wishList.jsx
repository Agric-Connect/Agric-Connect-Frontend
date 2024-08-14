import React, { useState } from 'react';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { hero4, hero5 } from '../../../assets';

const dummyWishlist = [
  {
    id: '1',
    product: 'Fresh Apples',
    image: hero4,
    price: 'GHC 200',
    details: 'Apples from the local farm.'
  },
  {
    id: '2',
    product: 'Organic Carrots',
    image: hero5,
    price: 'GHC 75',
    details: 'Freshly harvested carrots.'
  }
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(dummyWishlist);

  const handleRemoveFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const handleMoveToCart = (id) => {
    // Logic to move item to cart
    handleRemoveFromWishlist(id);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={item.image} alt={item.product} className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h2 className="text-lg font-semibold text-gray-800">{item.product}</h2>
              <p className="text-green-600 font-bold mb-2">Price: {item.price}</p>
              <p className="text-gray-600 mb-4">{item.details}</p>
              <div className="flex justify-between">
                <button 
                  onClick={() => handleMoveToCart(item.id)} 
                  className="p-2 bg-blue-500 text-white rounded-lg flex items-center"
                >
                  <FaShoppingCart className="mr-2" /> Move to Cart
                </button>
                <button 
                  onClick={() => handleRemoveFromWishlist(item.id)} 
                  className="p-2 bg-red-500 text-white rounded-lg flex items-center"
                >
                  <FaTrash className="mr-2" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
