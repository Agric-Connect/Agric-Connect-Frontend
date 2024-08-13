import React from 'react';

const TotalEarnings = ({ total }) => (
  <div className="bg-green-50 p-4 rounded-lg shadow-md ">
    <h2 className="text-lg font-semibold text-green-700">Total Earnings</h2>
    <p className="text-2xl font-bold text-green-900">
      GHC {total.toFixed(2)}
    </p>
  </div>
);

export default TotalEarnings;
