// src/components/AccountCreated.jsx
import { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AccountCreated = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.currentUser) {
        navigate('/login'); // If the user is not logged in, redirect to login page
        return;
      }

      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
        setLoading(false);
      } else {
        console.log('No such document!');
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Account Created Successfully!</h2>
        {userData ? (
          <div className="space-y-4 text-lg">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>USN:</strong> {userData.usn}</p>
          </div>
        ) : (
          <p className="text-center text-red-500">Failed to fetch user details!</p>
        )}
        <div className="mt-6 text-center">
          <button
            className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-600 focus:outline-none"
            onClick={() => navigate('/login')}
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreated;
