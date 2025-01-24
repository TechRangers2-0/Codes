import { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaIdCard } from 'react-icons/fa';

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', usn: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Save additional data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: formData.name,
        email: formData.email,
        usn: formData.usn,
      });

      // Redirect to the Account Created page
      navigate('/classForm');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-6 text-center text-white">
        <h2 className="text-3xl font-bold">Welcome to Our Platform</h2>
        <p className="text-sm mt-2 opacity-80">Join us today and get started!</p>
      </div>

      {/* Form */}
      <form className="p-8" onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* USN Input */}
          <div className="relative">
            <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="usn"
              name="usn"
              type="text"
              placeholder="id"
              value={formData.usn}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity ${
            loading && 'opacity-50 cursor-not-allowed'
          }`}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>

        {/* Link to Login */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
