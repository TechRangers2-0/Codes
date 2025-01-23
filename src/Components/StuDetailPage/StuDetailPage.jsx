import { useState } from 'react';

const StuDetailPage = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');

  const addStudent = () => {
    const newStudent = { id: students.length + 1, name, usn };
    setStudents([...students, newStudent]);
    setName('');
    setUsn('');
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const showDetails = (student) => {
    alert(`Name: ${student.name}, USN: ${student.usn}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Form to add student */}
        <div className="mb-6">
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
                onClick={() => showDetails(student)}
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
