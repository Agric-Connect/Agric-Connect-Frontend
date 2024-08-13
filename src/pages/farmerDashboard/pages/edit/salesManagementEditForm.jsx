import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SalesManagementEditForm = ({ sale, onSave }) => {
    const [date, setDate] = useState(sale.date);
    const [amount, setAmount] = useState(sale.amount);
    const [description, setDescription] = useState(sale.description);

    const handleSave = () => {
        const updatedSale = {
            ...sale,
            date,
            amount,
            description,
        };
        onSave(updatedSale);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Edit Sale</h2>

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
                        onClick={() => onSave(sale)} // Pass current sale if canceling
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default SalesManagementEditForm;
