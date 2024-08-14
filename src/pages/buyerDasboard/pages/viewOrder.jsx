import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';

const ordersData = [
  { id: 1, product: 'Apples', orderDate: '2024-08-01', quantity: 10, totalPrice: 'GHC 200', status: 'Pending', details: 'Apples from the local farm.' },
  { id: 2, product: 'Carrots', orderDate: '2024-08-02', quantity: 5, totalPrice: 'GHC 75', status: 'Delivered', details: 'Freshly harvested carrots.' },
  // Add more orders as needed
];

const ViewOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = ordersData.find(order => order.id === parseInt(id));

  if (!order) {
    return <p>Order not found.</p>;
  }

  const handleBackClick = () => {
    navigate('/buyer/orders');
  };

  return (
    <div className="p-6">
      <button onClick={handleBackClick} className="text-blue-500 mb-4 flex items-center">
        <FaArrowLeft className="mr-2" /> Back to Orders
      </button>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">{order.product}</h1>
        <p className="text-gray-600 mb-2">Order Date: {order.orderDate}</p>
        <p className="text-gray-600 mb-2">Quantity: {order.quantity}</p>
        <p className="text-green-600 font-bold mb-4">Total Price: {order.totalPrice}</p>
        <p className="text-gray-800">{order.details}</p>
        <div className="mt-4">
          {order.status === 'Pending' && (
            <button className="p-2 bg-red-500 text-white rounded-lg flex items-center">
              <FaTrash className="mr-2" /> Cancel Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
