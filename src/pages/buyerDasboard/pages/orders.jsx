import { Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { FaEye} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const initialOrdersData = [
  { id: 1, product: 'Apples', orderDate: '2024-08-01', quantity: 10, totalPrice: 'GHC 200', status: 'Pending' },
  { id: 2, product: 'Carrots', orderDate: '2024-08-02', quantity: 5, totalPrice: 'GHC 75', status: 'Delivered' },
  { id: 3, product: 'Cassava', orderDate: '2024-08-03', quantity: 20, totalPrice: 'GHC 500', status: 'Cancelled' },
  { id: 4, product: 'Rice', orderDate: '2024-08-04', quantity: 15, totalPrice: 'GHC 270', status: 'Pending' },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrdersData);

  const handleCancelOrder = (id) => {
    // Cancel order (change status to 'Cancelled')
    const updatedOrders = orders.map(order => 
      order.id === id ? { ...order, status: 'Cancelled' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">My Orders</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{order.product}</h3>
              <span
                className={`px-2 py-1 rounded-lg text-white ${order.status === 'Pending' ? 'bg-yellow-500' : order.status === 'Delivered' ? 'bg-green-500' : 'bg-red-500'}`}
              >
                {order.status}
              </span>
            </div>
            <p className="text-gray-600">Order Date: {order.orderDate}</p>
            <p className="text-gray-600">Quantity: {order.quantity}</p>
            <p className="text-green-600 font-bold">Total: {order.totalPrice}</p>

            <div className="mt-4 flex space-x-4">
              <Link to={`/buyer/orders/${order.id}`} className="p-2 bg-blue-500 text-white rounded-lg flex items-center">
                <FaEye className="mr-2" /> View Details
              </Link>
              {order.status === 'Pending' && (
                <button
                  onClick={() => handleCancelOrder(order.id)}
                  className="p-2 bg-red-500 text-white rounded-lg flex items-center"
                >
                  <Trash2 className="mr-2" /> Cancel Order
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
