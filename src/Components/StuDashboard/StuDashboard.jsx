import { useState } from "react";

function StuDashboard() {
  const [attendanceData, setAttendanceData] = useState([
    { subject: "Mathematics", attendance: 85 },
    { subject: "DAA", attendance: 92 },
    { subject: "DBMS", attendance: 88 },
    { subject: "SEPM", attendance: 78 },
    { subject: "MP", attendance: 74 },
    { subject: "UNIX", attendance: 90 },
  ]);

  const [selectedSubject, setSelectedSubject] = useState(null);

  const getAttendanceColor = (attendance) => {
    if (attendance >= 85) return "from-green-500 to-green-600";
    else if (attendance >= 75) return "from-yellow-500 to-yellow-600";
    else return "from-red-500 to-red-600";
  };

  const handleBarClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleAttendanceChange = (amount) => {
    setAttendanceData((prevData) =>
      prevData.map((item) =>
        item.subject === selectedSubject
          ? {
              ...item,
              attendance: Math.max(0, Math.min(100, item.attendance + amount)),
            }
          : item
      )
    );
  };

  const handleClosePopup = () => {
    setSelectedSubject(null);
  };

  // Add attendance management functions

  const [studentDetails, setStudentDetails] = useState({
    Name: "",
    USN: "",
    Dept: "",
    ContactNo: "",
    Email: "",
    Address: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleStudentInputChange = () => {
    setIsEditing(!isEditing);
  };

  const [scores, setScores] = useState({
    Mathematics: 92,
    DAA: 88,
    DBMS: 85,
    SEPM: 78,
    MP: 90,
    UNIX: 95,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempScores, setTempScores] = useState({ ...scores });

  const handleInputChange2 = (subject, value) => {
    setTempScores((prev) => ({
      ...prev,
      [subject]: value,
    }));
  };

  const handleSave = () => {
    setScores(tempScores);
    setIsModalOpen(false);
  };

  const getProgressBarColor = (score) => {
    if (score < 40) return "bg-red-500";
    if (score < 70) return "bg-yellow-500";
    return "bg-green-500";
  };
  const [subjectEnrollment, setSubjectEnrollment] = useState([]);

  // Edit mode toggle
  // New subject form state
  const [newSubject, setNewSubject] = useState({
    subject: "",
    teacher: "",
    Block: "",
    Floor: "",
  });

  // Handle input changes
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setNewSubject({ ...newSubject, [name]: value });
  };

  // Add new subject to the list
  const handleAddSubject = () => {
    setSubjectEnrollment([...subjectEnrollment, newSubject]);
    setNewSubject({ subject: "", teacher: "", Block: "", Floor: "" }); // Reset form
    setIsEditing(false); // Exit edit mode
  };

  // Add parent details
  const [parentDetails, setParentDetails] = useState({
    FatherName: "",
    FatherOccupation: "",
    FatherContact: "",
    FatherEmail: "",
    MotherName: "",
    MotherOccupation: "",
    MotherContact: "",
    MotherEmail: "",
    Address: "",
    EmergencyContact: "",
  });

  const [isEditingParent, setIsEditingParent] = useState(false);

  const handleInputChangeParent = (e) => {
    const { name, value } = e.target;
    setParentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleParentInputChange = () => {
    setIsEditingParent(!isEditingParent);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Student Dashboard
          </h1>
          <p className="text-gray-600">
            Academic performance and attendance overview
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Attendance Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                Subject-wise Attendance
              </h2>
            </div>
            <div className="p-6">
              <div className="h-[400px] flex items-end space-x-6">
                {attendanceData.map((item) => (
                  <div
                    key={item.subject}
                    className="flex flex-col items-center flex-1 group cursor-pointer"
                    onClick={() => handleBarClick(item.subject)}
                  >
                    <div className="w-full relative">
                      <div
                        className={`w-full bg-gradient-to-t ${getAttendanceColor(
                          item.attendance
                        )} rounded-t-lg transition-all duration-300 group-hover:translate-y-1`}
                        style={{ height: `${item.attendance * 3}px` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.attendance}%
                        </div>
                      </div>
                      <div className="text-sm text-gray-800 mt-2">
                        {item.subject}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
             <br /><hr /><br />
            <div className="pl-6">
              <h3 className="text-gray-800 font-semibold mb-3">
                Attendance Indicators
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-8 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded mr-3"></div>
                  <span className="text-sm text-gray-600">
                    Excellent (85% - 100%)
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded mr-3"></div>
                  <span className="text-sm text-gray-600">
                    Average (75% - 84%)
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded mr-3"></div>
                  <span className="text-sm text-gray-600">
                    Needs Improvement (Below 75%)
                  </span>
                </div>
              </div>
            </div>
            <br /><hr />

            {/* Popup Modal */}
            {selectedSubject && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Edit Attendance: {selectedSubject}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Current Attendance:{" "}
                    <span className="font-bold">
                      {
                        attendanceData.find(
                          (item) => item.subject === selectedSubject
                        ).attendance
                      }
                      %
                    </span>
                  </p>
                  <div className="flex items-center space-x-4">
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => handleAttendanceChange(-5)}
                    >
                      -5%
                    </button>
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={() => handleAttendanceChange(2)}
                    >
                      +2%
                    </button>
                  </div>
                  <button
                    className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                    onClick={handleClosePopup}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Student Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 pb-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Student Details
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {Object.entries(studentDetails).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-600 font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </span>
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
                      {/* <span className="text-gray-800">{value}</span> */}
                    </div>
                  ))}
                </div>
              </div>
              <a
                className="mt-3 px-6 py-2 ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:from-purple-600 hover:to-indigo-600 transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={handleStudentInputChange}
              >
                {isEditing ? "Save" : "Edit"}
              </a>
            </div>

            {/* Academic Scores */}
            <div className="bg-white rounded-2xl shadow-lg pb-4 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Academic Scores
                </h2>
              </div>
              <div className="p-6 mb-4">
                <div className="space-y-5">
                  {Object.entries(scores).map(([subject, score]) => (
                    <div key={subject}>
                      <div className="flex justify-between mb-2">
                        <span className="capitalize text-gray-600 font-medium">
                          {subject}
                        </span>
                        <span className="text-gray-800 font-semibold">
                          {score}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ease-out ${getProgressBarColor(
                            score
                          )}`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-3 px-6 py-2 ml-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-full hover:shadow-lg hover:from-green-700 hover:to-green-500 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Edit
              </button>

              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Edit Scores
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(tempScores).map(([subject, score]) => (
                        <div
                          key={subject}
                          className="flex justify-between items-center"
                        >
                          <span className="capitalize text-gray-600">
                            {subject}
                          </span>
                          <input
                            type="number"
                            className="w-16 p-1 border rounded text-center"
                            value={score}
                            onChange={(e) =>
                              handleInputChange2(subject, e.target.value)
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-end space-x-3">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sub enrollment */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 17l4-4m0 0l4-4m-4 4L8 7m4 4v6m4-6a4 4 0 01-8 0 4 4 0 018 0z"
                  />
                </svg>
                Faculty Details
              </h2>
            </div>

            {/* Subject List */}
            <div className="p-6">
              <ul className="space-y-4">
                {subjectEnrollment.map((subject, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-800 font-semibold">
                      {subject.subject}
                    </span>
                    <div className="text-gray-600">
                      <p className="text-sm">
                        <strong>Teacher:</strong> {subject.teacher}
                      </p>
                      <p className="text-sm">
                        <strong>Block:</strong> {subject.Block}
                      </p>
                      <p className="text-sm">
                        <strong>Floor:</strong> {subject.Floor}
                      </p>
                      <hr />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Edit Mode */}
            {isEditing && (
              <div className="p-6 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">Add Faculty</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="subject"
                    value={newSubject.subject}
                    onChange={handleInputChange1}
                    placeholder="Subject Name"
                    className="w-full p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    name="teacher"
                    value={newSubject.teacher}
                    onChange={handleInputChange1}
                    placeholder="Teacher Name"
                    className="w-full p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    name="Block"
                    value={newSubject.Block}
                    onChange={handleInputChange1}
                    placeholder="Block"
                    className="w-full p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    name="Floor"
                    value={newSubject.Floor}
                    onChange={handleInputChange1}
                    placeholder="Floor"
                    className="w-full p-2 border rounded-lg"
                  />
                  <button
                    onClick={handleAddSubject}
                    className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  >
                    Add Faculty
                  </button>
                </div>
              </div>
            )}

            {/* Edit Button */}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-6 py-2 ml-4 mb-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium rounded-full hover:shadow-lg hover:from-orange-700 hover:to-orange-500 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* Parent's details */}

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 pb-4">
            <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Parent Details
              </h2>
            </div>
            <div className="p-6 mb-3">
              <div className="space-y-4">
                {Object.entries(parentDetails).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}:
                    </span>
                    {isEditingParent ? (
                      <input
                        className="w-2/3 p-2 border rounded-md"
                        type="text"
                        name={key}
                        value={value}
                        onChange={handleInputChangeParent}
                      />
                    ) : (
                      <span className="w-2/3">{value}</span>
                    )}
                    {/* <span className="text-gray-800">{value}</span> */}
                  </div>
                ))}
              </div>
            </div>
            <a
              className="px-6 py-2 ml-4 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-medium rounded-full hover:shadow-lg hover:from-pink-700 hover:to-pink-500 transform hover:-translate-y-0.5 transition-all duration-200"
              onClick={handleParentInputChange}
            >
              {isEditingParent ? "Save" : "Edit"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StuDashboard;
