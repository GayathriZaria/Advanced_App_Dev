import React from 'react';
import { Link } from 'react-router-dom';

const PaymentHistoryPage = () => {
  const payments = [
    { id: 1, status: 'Success', totalAmount: 500, date: '2024-03-16', modeOfPayment: 'Google pay' },
    { id: 2, status: 'Failure', totalAmount: 150, date: '2024-03-15', modeOfPayment: 'Paytm' },
    { id: 3, status: 'Success', totalAmount: 200, date: '2024-03-14', modeOfPayment: 'PhonePe' },
    // Add more payment data as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 mx-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Payment ID</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Total Amount</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Mode of Payment</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.id}>
                <td className="border border-gray-300 px-4 py-2">{payment.id}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.status}</td>
                <td className="border border-gray-300 px-4 py-2">${payment.totalAmount}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.date}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.modeOfPayment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/admin" className="button hover:bg-blue-600">
          Back
        </Link>
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
