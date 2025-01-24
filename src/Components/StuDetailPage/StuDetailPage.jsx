import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StuDetailPage = () => {
  const navigate = useNavigate();

  // State variables
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');

  // Load students from localStorage when the component mounts
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
      setStudents(storedStudents);
    }
  }, []); // This runs only once when the component mounts

  // Add a new student
  const addStudent = () => {
    if (name.trim() && usn.trim()) {
      const newStudent = { id: students.length + 1, name, usn };
      const updatedStudents = [...students, newStudent];
      setStudents(updatedStudents);
      // Save updated student list to localStorage
      localStorage.setItem('students', JSON.stringify(updatedStudents));
      setName('');
      setUsn('');
    } else {
      alert('Please fill in both Name and USN.');
    }
  };

  // Delete a student by ID
  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    // Update localStorage when a student is deleted
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  // Navigate to the details page
  const showDetails = (student) => {
    navigate('/StuDashboard', { state: student }); // Pass student details as state
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Students
        </h1>
        <hr />

        {/* Form to add student */}
        <div className="mb-6 pt-5">
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mr-4 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="USN"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
            className="mr-4 p-2 border rounded"
          />
          <button
            onClick={addStudent}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add
          </button>
        </div>

        {/* Student Details List */}
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 mb-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {student.name}
              </h2>
              <p className="text-gray-600">USN: {student.usn}</p>
            </div>
            <div>
              <button
                onClick={() => showDetails(student)} // Navigate to StuDashboard with details
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Details
              </button>
              <button
                onClick={() => deleteStudent(student.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StuDetailPage;
