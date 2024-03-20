import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  const totalPrice = 250;

  const handlePayment = async () => {
    try {
      const paymentResponse = await initiatePayment(totalPrice);
      if (paymentResponse.success) {
        const selectedUPIApp = await selectUPIApp(paymentResponse);
        alert(`Payment successful using ${selectedUPIApp}!`);
        window.location.href = '/dashboard'; 
      } else {
        alert('Payment initiation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('An error occurred while initiating payment. Please try again later.');
    }
  };

  const initiatePayment = async (totalPrice) => {
    return { success: true };
  };

  const selectUPIApp = async (paymentResponse) => {
    const selectedUPIApp = prompt('Please select your UPI app (e.g., Paytm, Google Pay, PhonePe)');
    return selectedUPIApp;
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-96 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Payment</h2>
        <p className="mb-4">Total Amount: ${totalPrice}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handlePayment}
        >
          Pay Now
        </button>
        <Link to="/dashboard" className="block text-center mt-4 text-blue-500 hover:text-blue-700">
          Cancel Order
        </Link>
      </div>
    </div>
  );
};

export default Payment;
