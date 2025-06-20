import React, { useState } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import ResponseCard from './ResponseCard';

const Create = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleReturnLabel = async () => {
    const customer = {
      name: 'Akshay Namdev',
      address: '123 Royal Palace, Maharashtra',
      phone: '9876543210',
      pincode: '400001'
    };

    const orderId = 'RETURN-ORD-1234';

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/user/create', {
        orderId,
        customer
      });

      setResponse(res.data);
    } catch (err) {
      console.error('Error:', err);
      alert('Label generation failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          🧾 Return Shipment Label
        </h1>

        <div className="bg-blue-50 border border-blue-200 text-sm text-blue-900 p-4 rounded mb-6">
          <p><strong>Customer:</strong> Akshay Namdev</p>
          <p><strong>Order ID:</strong> RETURN-ORD-1234</p>
        </div>

        <button
          onClick={handleReturnLabel}
          disabled={loading}
          className={`w-full flex items-center justify-center py-3 px-6 font-medium text-white rounded-md transition
            ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? (
            <>
              <LoadingSpinner />
              <span className="ml-2">Generating...</span>
            </>
          ) : (
            'Generate Return Label'
          )}
        </button>

        {/* Response Section */}
        {response && (
          <div className="mt-8 border rounded-lg bg-gray-50 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">📦 Shipment Summary</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold">Order ID:</p>
                <p>{response.order_id}</p>
              </div>

              <div>
                <p className="font-semibold">Shipment Type:</p>
                <p>{response.shipment_type === 2 ? 'Return' : 'Forward'}</p>
              </div>

              <div>
                <p className="font-semibold">AWB Assigned:</p>
                <p>{response.awb_assign ? 'Yes' : 'No'}</p>
              </div>

              <div>
                <p className="font-semibold">Courier ID:</p>
                <p>{response.courier_id}</p>
              </div>

              <div>
                <p className="font-semibold">Channel ID:</p>
                <p>{response.channel_id}</p>
              </div>

              <div>
                <p className="font-semibold">API Token:</p>
                <p className="truncate">{response.api_token}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">👤 Consignee Details</h3>
                <p><strong>Name:</strong> {response.consignee?.name}</p>
                <p><strong>Address:</strong> {response.consignee?.address}</p>
                <p><strong>Phone:</strong> {response.consignee?.phone}</p>
                <p><strong>Pincode:</strong> {response.consignee?.pincode}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">🏬 Pickup Location</h3>
                <p><strong>Name:</strong> {response.pickup_location?.name}</p>
                <p><strong>Address:</strong> {response.pickup_location?.address}</p>
                <p><strong>Phone:</strong> {response.pickup_location?.phone}</p>
                <p><strong>Pincode:</strong> {response.pickup_location?.pincode}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
