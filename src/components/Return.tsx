import React, { useState } from 'react';

const ReturnPolicy = () => {
  const [showPolicy, setShowPolicy] = useState(false);

  // Function to handle toggling the dropdown visibility
  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
  };

  return (
    <div>
      <h3 onClick={togglePolicy} style={{ cursor: 'pointer' }}>
        <div className='flex'>
        <div>Return & Return Policy</div>
        <div className="ml-32 mb-2 text-xl">+</div>
        </div>
      </h3>
      {showPolicy && (
        <div>
          {/* Replace this with your actual return policy content */}
          <p>
            Return valid till 15 days after delivery
          </p>
          <p>
            Condition shouldn't be damaged.
          </p>
        </div>
      )}
    </div>
  );
};

export default ReturnPolicy;
