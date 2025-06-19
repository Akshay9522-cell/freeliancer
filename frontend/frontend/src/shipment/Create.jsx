import React, { useState } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import ResponseCard from './ResponseCard';
const Create = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleReturnLabel = async () => {
    const customer = {
      name: "Akshay Namdev",
      address: "123 Royal Palace, Maharashtra",
      phone: "9876543210",
      pincode: "400001"
    };

    const orderId = "RETURN-ORD-1234";

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/user/create', {
        orderId,
        customer
      });

      console.log('Label generated:', res.data);
      setResponse(res.data);
      alert('Return label generated!');
    } catch (err) {
      console.error('Error:', err);
      alert('Label generation failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Return Shipment Label</h2>

        <div className="text-sm text-gray-600 mb-6">
          <p><strong>Customer:</strong> Akshay Namdev</p>
          <p><strong>Order ID:</strong> RETURN-ORD-1234</p>
        </div>

        <button
          onClick={handleReturnLabel}
          disabled={loading}
          className={`w-full py-2 px-4 text-white font-semibold rounded 
          ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? 'Generating...' : 'Generate Return Label'}
        </button>

        {response && (
          <div className="mt-6 text-sm bg-gray-50 p-4 rounded border border-gray-200">
            <h4 className="font-semibold mb-2">Response:</h4>
            <pre className="whitespace-pre-wrap text-xs text-gray-700">
              {
               response.pickup_location.address
              }
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
