// EarningsForm.jsx
import React, { useState, useEffect } from 'react';

const EarningsForm = ({ onAdd, onEdit, editingTransaction, setEditingTransaction }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTransaction) {
      setDate(editingTransaction.date);
      setAmount(editingTransaction.amount);
      setDescription(editingTransaction.description);
    }
  }, [editingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = { date, amount: parseFloat(amount), description };

    if (editingTransaction) {
      onEdit({ ...transaction, date: editingTransaction.date });
    } else {
      onAdd(transaction);
    }

    // Clear the form
    setDate('');
    setAmount('');
    setDescription('');
    setEditingTransaction(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-semibold text-gray-700">{editingTransaction ? 'Edit Transaction' : 'Add Transaction'}</h2>
      <div className="mt-2">
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mt-2">
        <label className="block text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mt-2">
        <label className="block text-gray-700">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-primary text-white px-4 py-2 rounded"
      >
        {editingTransaction ? 'Update Transaction' : 'Add Transaction'}
      </button>
    </form>
  );
};

export default EarningsForm;
