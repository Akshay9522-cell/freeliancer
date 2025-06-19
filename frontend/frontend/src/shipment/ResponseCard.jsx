import React from "react";

const ResponseCard = ({ response }) => {
  if (!response) return null;

  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-700">Response Details</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Success
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {/* Pickup Location Section */}
          <div>
            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Pickup Location
            </h4>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {response.pickup_location?.address || "No address provided"}
              </p>
            </div>
          </div>

          {/* Tracking Details */}
          {response.tracking_number && (
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Tracking Number
              </h4>
              <div className="flex items-center space-x-2">
                <code className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded font-mono">
                  {response.tracking_number}
                </code>
                <button 
                  className="text-blue-600 hover:text-blue-700"
                  onClick={() => navigator.clipboard.writeText(response.tracking_number)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                </button>
              </div>
            </div>
          )}

          {/* Additional Details */}
          {response.additional_details && (
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Additional Information
              </h4>
              <div className="bg-gray-50 rounded-lg p-3">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                  {JSON.stringify(response.additional_details, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Download Button */}
        {response.label_url && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <a
              href={response.label_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><line x1="128" y1="144" x2="128" y2="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="216 144 216 208 40 208 40 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="168 104 128 144 88 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              <span className="ml-2">Download Label</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseCard;