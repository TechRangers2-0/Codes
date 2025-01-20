
function StuDashboard() {
  const getAttendanceColor = (attendance) => {
    if (attendance >= 85) {
      return "from-green-500 to-green-600";
    } else if (attendance >= 75) {
      return "from-yellow-500 to-yellow-600";
    } else {
      return "from-red-500 to-red-600";
    }
  };
  const attendanceData = [
    {
      subject: "Mathematics",
      attendance: 85,
    },
    {
      subject: "DAA",
      attendance: 92,
    },
    {
      subject: "DBMS",
      attendance: 88,
    },
    {
      subject: "SEPM",
      attendance: 78,
    },
    {
      subject: "MP",
      attendance: 95,
    },
    {
      subject: "UNIX",
      attendance: 90,
    },
  ];

  
  // Add attendance management functions
  

  

  const studentDetails = {
    name: "John Doe",
    rollNo: "2024001",
    class: "X-A",
    contactNo: "+1 234-567-8900",
    email: "john.doe@school.com",
    address: "123 Education Street",
  };

  const scores = {
    Mathematics: 92,
    DAA: 88,
    DBMS: 85,
    SEPM: 78,
    MP: 90,
    UNIX: 95,
  };
  const subjectEnrollment = [
    {
      subject: "Mathematics",
      teacher: "Dr. Smith",
      schedule: "Mon/Wed 9:00 AM",
      room: "101",
    },
    {
      subject: "DAA",
      teacher: "Mrs. Johnson",
      schedule: "Tue/Thu 10:30 AM",
      room: "Lab 2",
    },
    {
      subject: "DBMS",
      teacher: "Mr. Davis",
      schedule: "Mon/Fri 11:00 AM",
      room: "203",
    },
    {
      subject: "SEPM",
      teacher: "Ms. Wilson",
      schedule: "Wed/Fri 2:00 PM",
      room: "105",
    },
    {
      subject: "MP",
      teacher: "Mr. Brown",
      schedule: "Tue/Thu 1:30 PM",
      room: "302",
    },
    {
      subject: "UNIX",
      teacher: "Mrs. Miller",
      schedule: "Mon/Thu 3:00 PM",
      room: "Lab 1",
    },
  ];

  // Add parent details
  const parentDetails = {
    fatherName: "Robert Doe",
    fatherOccupation: "Software Engineer",
    fatherContact: "+1 234-567-8901",
    fatherEmail: "robert.doe@email.com",
    motherName: "Sarah Doe",
    motherOccupation: "Doctor",
    motherContact: "+1 234-567-8902",
    motherEmail: "sarah.doe@email.com",
    address: "123 Family Street, Cityville",
    emergencyContact: "+1 234-567-8903",
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
            className="flex flex-col items-center flex-1 group"
          >
            <div className="w-full relative">
              <div
                className={`w-full bg-gradient-to-t ${getAttendanceColor(
                  item.attendance
                )} rounded-t-lg transition-all duration-300 group-hover:translate-y-1 relative`}
                style={{ height: `${item.attendance * 3}px` }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.attendance}%
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-full flex items-center justify-center">
                  <div
                    className="text-white text-sm font-medium transform -rotate-90 origin-center whitespace-nowrap"
                    style={{
                      transformOrigin: "center",
                      width: "20px",
                      textAlign: "center",
                      letterSpacing: "0.05em",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    {item.subject}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mb-6 mx-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-800 font-semibold mb-3">Attendance Indicators</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="w-8 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded mr-3"></div>
            <span className="text-sm text-gray-600">Excellent (85% - 100%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded mr-3"></div>
            <span className="text-sm text-gray-600">Average (75% - 84%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded mr-3"></div>
            <span className="text-sm text-gray-600">Needs Improvement (Below 75%)</span>
          </div>
        </div>
      </div>
    </div>
    <button
      className="px-6 py-2 ml-4 mb-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-full hover:shadow-lg hover:from-blue-700 hover:to-blue-500 transform hover:-translate-y-0.5 transition-all duration-200"
    >
      Edit
    </button>
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
              <span className="text-gray-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <a className="mt-3 px-6 py-2 ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:from-purple-600 hover:to-indigo-600 transform hover:-translate-y-0.5 transition-all duration-200">
        Edit
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
                  className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <a className="mt-3 px-6 py-2 ml-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-full hover:shadow-lg hover:from-green-700 hover:to-green-500 transform hover:-translate-y-0.5 transition-all duration-200">
        Edit
      </a>
    </div>
  </div>
</div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
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
                Subject Enrollment
              </h2>
            </div>
            <div className="p-6 mb-3">
              <ul className="space-y-4">
                {subjectEnrollment.map((subject) => (
                  <li
                    key={subject.subject}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-800 font-semibold">
                      {subject.subject}
                    </span>
                    <div className="text-gray-600">
                      <p className="text-sm">
                        <strong>Instructor:</strong> {subject.instructor}
                      </p>
                      <p className="text-sm">
                        <strong>Credits:</strong> {subject.credits}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <a className="px-6 py-2 ml-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium rounded-full hover:shadow-lg hover:from-orange-700 hover:to-orange-500 transform hover:-translate-y-0.5 transition-all duration-200">
              Edit
            </a>
          </div>

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
                    <span className="text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <a className="px-6 py-2 ml-4 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-medium rounded-full hover:shadow-lg hover:from-pink-700 hover:to-pink-500 transform hover:-translate-y-0.5 transition-all duration-200">
              Edit
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default StuDashboard;
