// Earnings.jsx
import React, { useState } from 'react';
import TotalEarnings from './earnings/totalEarnings';
import EarningsBreakdown from './earnings/earningsBreakdown';
import RecentTransactions from './earnings/recentTransactions';
import EarningsForm from './forms/earningsForm';


const sampleEarningsData = {
  total: 5000,
  breakdown: [
    { category: 'Vegetables', amount: 2000 },
    { category: 'Fruits', amount: 1500 },
    { category: 'Grains', amount: 1000 },
    { category: 'Dairy', amount: 500 }
  ],
  transactions: [
    { date: '2024-08-01', amount: 200, description: 'Sale of Tomatoes' },
    { date: '2024-08-05', amount: 300, description: 'Sale of Cucumbers' },
    { date: '2024-08-10', amount: 150, description: 'Sale of Carrots' }
  ]
};

const Earnings = () => {
  const [earningsData, setEarningsData] = useState(sampleEarningsData);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const handleAddTransaction = (transaction) => {
    setEarningsData(prev => ({
      ...prev,
      transactions: [...prev.transactions, transaction]
    }));
  };

  const handleEditTransaction = (updatedTransaction) => {
    setEarningsData(prev => ({
      ...prev,
      transactions: prev.transactions.map(transaction =>
        transaction.date === updatedTransaction.date ? updatedTransaction : transaction
      )
    }));
    setEditingTransaction(null);
  };

  const handleDeleteTransaction = (date) => {
    setEarningsData(prev => ({
      ...prev,
      transactions: prev.transactions.filter(transaction => transaction.date !== date)
    }));
  };

  return (
    <div className="p-6 space-y-4">
      <TotalEarnings total={earningsData.total} />
      <EarningsBreakdown breakdown={earningsData.breakdown} />
      <RecentTransactions
        transactions={earningsData.transactions}
        onEdit={setEditingTransaction}
        onDelete={handleDeleteTransaction}
      />
      <EarningsForm
        onAdd={handleAddTransaction}
        onEdit={handleEditTransaction}
        editingTransaction={editingTransaction}
        setEditingTransaction={setEditingTransaction}
      />
    </div>
  );
};

export default Earnings;
