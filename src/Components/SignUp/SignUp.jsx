// src/components/AllPages.jsx
import { useState } from 'react';
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';

const AllPages = () => {
  const [activeTab, setActiveTab] = useState('signup'); // Default to the Signup tab

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
        <div className="flex justify-center border-b">
          <button
            className={`w-1/2 py-2 text-lg font-medium ${activeTab === 'signup' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setActiveTab('signup')}
          >
            Signup
          </button>
          <button
            className={`w-1/2 py-2 text-lg font-medium ${activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
        </div>
        <div className="p-6">
          {activeTab === 'signup' && <SignupForm />}
          {activeTab === 'login' && <LoginForm />}
        </div>
      </div>
    </div>
  );
};

export default AllPages;
