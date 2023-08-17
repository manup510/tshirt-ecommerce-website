import React, { useState } from 'react';

const Shipment = () => {
  const [showPolicy, setShowPolicy] = useState(false);

  // Function to handle toggling the dropdown visibility
  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
  };

  return (
    <div>
      <h3 onClick={togglePolicy} style={{ cursor: 'pointer' }}>
        <div className='flex'>
        <div>Shipping Info&nbsp;</div>
        <div className="ml-48 mb-2 text-xl">+</div>
        </div>
      </h3>
      {showPolicy && (
        <div>
          {/* Replace this with your actual return policy content */}
          <p>
            Delivery of products in 4 days.
          </p>
          <p>
            one day delivery costs extra $2.
          </p>
        </div>
      )}
    </div>
  );
};

export default Shipment;
