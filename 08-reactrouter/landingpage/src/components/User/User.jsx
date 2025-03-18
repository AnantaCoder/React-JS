import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
        <p className="text-lg text-gray-600 mt-2">User ID: <span className="font-bold text-blue-500">{id}</span></p>
      </div>
    </div>
  );
}

export default User;
