import React, { useState } from 'react';

const ProtectedRoute = ({ children, correctCode }) => {
  const [inputCode, setInputCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleInputChange = (e) => {
    setInputCode(e.target.value);
  };

  const handleSubmit = () => {
    if (inputCode === correctCode) {
      setIsAuthorized(true);
    } else {
      alert('Incorrect code. Please try again.');
    }
  };

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Enter Access Code</h1>
      <input
        type="text"
        value={inputCode}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </div>
  );
};

export default ProtectedRoute;