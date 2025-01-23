import React from 'react'

export const sample = () => {
  return (
    <div><div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-gray-50">
    <h2 className="text-center text-2xl font-semibold mb-6">Student Details</h2>
    {Object.entries(studentDetails).map(([key, value]) => (
      <div className="flex justify-between items-center mb-4" key={key}>
        <strong className="w-1/3 font-semibold capitalize">
          {key.replace(/([A-Z])/g, ' $1').trim()}:
        </strong>
        {isEditing ? (
          <input
            className="w-2/3 p-2 border rounded-md"
            type="text"
            name={key}
            value={value}
            onChange={handleInputChange}
          />
        ) : (
          <span className="w-2/3">{value}</span>
        )}
      </div>
    ))}
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      onClick={handleEditToggle}
    >
      {isEditing ? 'Save' : 'Edit'}
    </button>
  </div></div>
  )
}
