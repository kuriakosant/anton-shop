import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Here is our contact information</h1>
      <p className="text-lg text-gray-700">Phone: 123123</p>
      <p className="text-lg text-gray-700">email: email@gmail.com</p>
    </div>
  );
};

export default Contact;
