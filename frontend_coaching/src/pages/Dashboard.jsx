import React from 'react';
import { Link } from 'react-router-dom';

function DashBoard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Welcome to Coaching Scheduler</h1>
      <div className="flex space-x-4">
        <Link to="/coach">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Coach</button>
        </Link>
        <Link to="/student">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Student</button>
        </Link>
      </div>
    </div>
  );
}

export default DashBoard;
