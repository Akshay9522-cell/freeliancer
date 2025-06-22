import React, { useState } from 'react';
import { Package, Truck, User, MapPin, Phone, Hash, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

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
      
     
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockResponse = {
        order_id: orderId,
        shipment_type: 2,
        awb_assign: true,
        courier_id: 'DHL001',
        channel_id: 'CH789',
        api_token: 'tok_abc123def456ghi789jkl012',
        consignee: customer,
        pickup_location: {
          name: 'Warehouse Central',
          address: '456 Distribution Center, Mumbai',
          phone: '+91-22-1234-5678',
          pincode: '400002'
        }
      };

      setResponse(mockResponse);
    } catch (err) {
      console.error('Error:', err);
      alert('Label generation failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
       
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl mb-4">
            <Package className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Return Shipment</h1>
          <p className="text-lg text-gray-600">Generate professional return labels with ease</p>
        </div>

        <div className="max-w-6xl mx-auto">
      
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            
         
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Order Details</h2>
                  <p className="text-blue-100">Ready for return processing</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-blue-100 mb-1">Order ID</div>
                  <div className="font-mono text-lg font-semibold">RETURN-ORD-1234</div>
                </div>
              </div>
            </div>

            <div className="px-8 py-6 border-b border-gray-100">
              <div className="flex items-center mb-4">
                <User className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Customer Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <div>
                      <div className="text-sm text-gray-500">Full Name</div>
                      <div className="font-medium text-gray-900">Akshay Namdev</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <div>
                      <div className="text-sm text-gray-500">Phone Number</div>
                      <div className="font-medium text-gray-900">+91 9876543210</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                    <div>
                      <div className="text-sm text-gray-500">Address</div>
                      <div className="font-medium text-gray-900">123 Royal Palace, Maharashtra</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <div>
                      <div className="text-sm text-gray-500">PIN Code</div>
                      <div className="font-medium text-gray-900">400001</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 py-8">
              <button
                onClick={handleReturnLabel}
                disabled={loading}
                className={`w-full flex items-center justify-center py-4 px-6 text-lg font-semibold rounded-xl transition-all duration-200 ${
                  loading 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                }`}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-gray-300 border-t-gray-600 mr-3"></div>
                    Generating Return Label...
                  </>
                ) : (
                  <>
                    <Package className="w-6 h-6 mr-3" />
                    Generate Return Label
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Response Section */}
          {response && (
            <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Success Header */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6 text-white">
                <div className="flex items-center">
                  <CheckCircle className="w-8 h-8 mr-3" />
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Label Generated Successfully</h2>
                    <p className="text-green-100">Your return shipment is ready for processing</p>
                  </div>
                </div>
              </div>

            
              <div className="px-8 py-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Hash className="w-5 h-5 mr-2 text-blue-600" />
                  Shipment Details
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Order ID</div>
                    <div className="font-mono text-sm font-semibold text-gray-900">{response.order_id}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Type</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {response.shipment_type === 2 ? 'Return' : 'Forward'}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">AWB Status</div>
                    <div className="flex items-center">
                      {response.awb_assign ? (
                        <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-600 mr-1" />
                      )}
                      <span className="text-sm font-semibold text-gray-900">
                        {response.awb_assign ? 'Assigned' : 'Pending'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Courier</div>
                    <div className="text-sm font-semibold text-gray-900">{response.courier_id}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Channel</div>
                    <div className="text-sm font-semibold text-gray-900">{response.channel_id}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">API Token</div>
                    <div className="text-xs font-mono text-gray-600 truncate">{response.api_token}</div>
                  </div>
                </div>
              </div>

            
              <div className="px-8 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <User className="w-5 h-5 text-blue-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-900">Customer Details</h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-3" />
                        <div>
                          <div className="text-xs text-gray-500">Name</div>
                          <div className="font-medium text-gray-900">{response.consignee?.name}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-gray-400 mr-3 mt-1" />
                        <div>
                          <div className="text-xs text-gray-500">Address</div>
                          <div className="font-medium text-gray-900">{response.consignee?.address}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-gray-400 mr-3" />
                        <div>
                          <div className="text-xs text-gray-500">Phone</div>
                          <div className="font-medium text-gray-900">{response.consignee?.phone}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Hash className="w-4 h-4 text-gray-400 mr-3" />
                        <div>
                          <div className="text-xs text-gray-500">PIN Code</div>
                          <div className="font-medium text-gray-900">{response.consignee?.pincode}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <Truck className="w-5 h-5 text-green-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-900">Pickup Location</h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-3" />
                        <div>
                          <div className="text-xs text-gray-500">Name</div>
                          <div className="font-medium text-gray-900">{response.pickup_location?.name}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-gray-400 mr-3 mt-1" />
                        <div>
                          <div className="text-xs text-gray-500">Address</div>
                          <div className="font-medium text-gray-900">{response.pickup_location?.address}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-gray-400 mr-3" />
                        <div>
                          <div className="text-xs text-gray-500">Phone</div>
                          <div className="font-medium text-gray-900">{response.pickup_location?.phone}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Hash className="w-4 h-4 text-gray-400 mr-3" />
                        <div>
                          <div className="text-xs text-gray-500">PIN Code</div>
                          <div className="font-medium text-gray-900">{response.pickup_location?.pincode}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Create;