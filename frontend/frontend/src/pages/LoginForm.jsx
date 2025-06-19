// Frontend: React Component (e.g., LoginForm.js)

import React, { useRef, useEffect } from 'react';

const LoginForm = () => {
  const inputRef = useRef(null); // Create a ref

  useEffect(() => {
    inputRef.current.focus(); // Focus the input when component mounts
  }, []);

  const handleSubmit = () => {
    alert('Username: ' + inputRef.current.value); // Get value without state
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Enter username"
        ref={inputRef}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>
        Submit
      </button>
    </div>
  );
};

export default LoginForm;
