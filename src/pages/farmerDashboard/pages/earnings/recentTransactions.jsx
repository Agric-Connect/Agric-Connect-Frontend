import { Edit, Trash2 } from 'lucide-react';
import React from 'react';

const RecentTransactions = ({ transactions, onEdit, onDelete }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mt-4">
    <h2 className="text-xl font-semibold text-primary mb-2">Recent Transactions</h2>
    <ul className="mt-2">
      {transactions.map((transaction, index) => (
        <li 
          key={index} 
          className="flex justify-between items-center py-2 border-b last:border-b-0"
        >
          <div className="flex-1 pr-4">
            <span className="block font-medium text-gray-800 ml-[100px]">{transaction.date}</span>
            <span className="block text-gray-500 text-m ml-[100px]">{transaction.description}</span>
          </div>
          <span className="font-semibold text-gray-700 pl-[150px]">GHC {transaction.amount.toFixed(2)}</span>
          <div className="flex space-x-3 ml-4">
            <button 
              onClick={() => onEdit(transaction)} 
              className="text-primary hover:text-green-800 pl-[150px]"
            >
              <Edit />
            </button>
            <button 
              onClick={() => onDelete(transaction.date)} 
              className="text-red-500 hover:text-red-700 pr-[150px]"
            >
              <Trash2 />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentTransactions;
