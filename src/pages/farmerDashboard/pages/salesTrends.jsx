import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, Edit, Trash, Trash2 } from 'lucide-react';  // Import Trash icon
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesTrends = () => {
  const [salesData, setSalesData] = useState([
    { id: 1, date: '2024-01-01', amount: 1000, description: 'January Sales' },
    { id: 2, date: '2024-02-01', amount: 1500, description: 'February Sales' },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSale, setCurrentSale] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('GHC');

  const currencySymbols = {
    GHC: 'GHC',
    USD: '$',
    EUR: '€',
    GBP: '£',
    NGN: '₦',
  };

  const conversionRates = {
    GHC: 1,
    USD: 0.064,
    EUR: 0.059,
    GBP: 0.050,
    NGN: 101.73,
  };

  const handleAddSales = (newSale) => {
    setSalesData([...salesData, newSale]);
    setIsEditing(false);
    setCurrentSale(null);
  };

  const handleEditSales = (updatedSale) => {
    setSalesData(salesData.map(sale => (sale.id === updatedSale.id ? updatedSale : sale)));
    setIsEditing(false);
    setCurrentSale(null);
  };

  const handleEditClick = (sale) => {
    setCurrentSale(sale);
    setIsEditing(true);
  };

  const handleDeleteClick = (id) => {
    setSalesData(salesData.filter(sale => sale.id !== id));
  };

  const convertedAmount = (amount) => {
    return (amount * conversionRates[selectedCurrency]).toFixed(2);
  };

  // Prepare data for the chart
  const chartData = {
    labels: salesData.map(sale => sale.date),
    datasets: [
      {
        label: `Sales Amount (${currencySymbols[selectedCurrency]})`,
        data: salesData.map(sale => convertedAmount(sale.amount)),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="pr-6 pl-10">
      <h1 className="text-2xl font-bold mb-6">Sales Trends</h1>

      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          <PlusCircle className="inline-block mr-2" /> Add Sales
        </button>

        <div>
          <label className="mr-2 text-lg font-medium">Currency:</label>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.keys(currencySymbols).map(currency => (
              <option key={currency} value={currency}>
                {currencySymbols[currency]} {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isEditing ? (
        <SalesForm
          sale={currentSale}
          onSave={currentSale ? handleEditSales : handleAddSales}
          onCancel={() => {
            setIsEditing(false);
            setCurrentSale(null);
          }}
        />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Line data={chartData} />
          </motion.div>
          <SalesList
            salesData={salesData}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
            convertedAmount={convertedAmount}
            selectedCurrency={selectedCurrency}
            currencySymbols={currencySymbols}
          />
        </>
      )}
    </div>
  );
};

const SalesList = ({ salesData, onEditClick, onDeleteClick, convertedAmount, selectedCurrency, currencySymbols = {} }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-xl font-semibold mb-4">Sales Data</h2>
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left p-2">Date</th>
          <th className="text-left p-2">Amount ({selectedCurrency})</th>
          <th className="text-left p-2">Description</th>
          <th className="text-left p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((sale) => (
          <tr key={sale.id}>
            <td className="p-2">{sale.date}</td>
            <td className="p-2">
              {currencySymbols[selectedCurrency] || selectedCurrency} {convertedAmount(sale.amount)}
            </td>
            <td className="p-2">{sale.description}</td>
            <td className="p-2 flex items-center">
              <button
                onClick={() => onEditClick(sale)}
                className="text-primary hover:underline flex items-center mr-4"
              >
                <Edit className="inline-block mr-1" /> Edit
              </button>
              <button
                onClick={() => onDeleteClick(sale.id)}
                className="text-red-500 hover:underline flex items-center"
              >
                <Trash2 className="inline-block" /> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SalesForm = ({ sale, onSave, onCancel }) => {
  const [date, setDate] = useState(sale ? sale.date : '');
  const [amount, setAmount] = useState(sale ? sale.amount : '');
  const [description, setDescription] = useState(sale ? sale.description : '');

  const handleSave = () => {
    const newSale = {
      id: sale ? sale.id : Date.now(),
      date,
      amount,
      description,
    };
    onSave(newSale);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{sale ? 'Edit Sale' : 'Add Sale'}</h2>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

export default SalesTrends;
