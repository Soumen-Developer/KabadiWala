import React from 'react';
import { ScrapRate } from '../../types';

interface ScrapRateTableProps {
  rates: ScrapRate[];
}

const ScrapRateTable: React.FC<ScrapRateTableProps> = ({ rates }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-primary-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary-800 uppercase tracking-wider">
              Material
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-primary-800 uppercase tracking-wider">
              Rate (₹)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary-800 uppercase tracking-wider">
              Unit
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary-800 uppercase tracking-wider">
              Last Updated
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rates.map((rate) => (
            <tr key={rate.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {rate.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right font-medium">
                ₹{rate.rate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                per {rate.unit}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(rate.updatedAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrapRateTable;