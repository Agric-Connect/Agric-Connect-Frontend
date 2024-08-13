import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const EarningsBreakdown = ({ breakdown }) => {
  const data = breakdown.map(item => ({
    name: item.category,
    value: item.amount
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
        <PieChart width={340} height={340}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </div>

      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Earnings Breakdown</h2>
        <ul className="space-y-2">
          {breakdown.map((item, index) => (
            <li key={index} className="flex justify-between py-2 border-b">
              <span className="font-medium text-gray-600">{item.category}</span>
              <span className="text-gray-800 font-semibold">GHC {item.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EarningsBreakdown;
