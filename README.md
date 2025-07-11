# 🎓 Student Management System (SMS)

<div align="center">



[![GitHub stars](https://img.shields.io/github/stars/TechRangers2-0/Codes?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TechRangers2-0/Codes/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/TechRangers2-0/Codes?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TechRangers2-0/Codes/network/members)
[![GitHub issues](https://img.shields.io/github/issues/TechRangers2-0/Codes?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TechRangers2-0/Codes/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/TechRangers2-0/Codes?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TechRangers2-0/Codes/graphs/contributors)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**A modern, feature-rich Student Management System built with React and Vite** 🚀

[Demo](https://github.com/TechRangers2-0/Codes) • [Report Bug](https://github.com/TechRangers2-0/Codes/issues) • [Request Feature](https://github.com/TechRangers2-0/Codes/issues)

</div>

---

## 📋 Table of Contents

- [🎯 About](#-about)
- [🛠️ Tech Stack](#️-tech-stack)
- [✨ Features](#-features)
- [🚀 Installation](#-installation)
- [💻 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [👥 Team](#-team)
- [📄 License](#-license)
- [🆘 Support](#-support)

---

## 🎯 About

The **Student Management System (SMS)** is a comprehensive web application designed to streamline educational administration. Built with modern technologies like React and Firebase, it provides an intuitive interface for managing student data, class information, and academic records.

### 🌟 Why SMS?

- **Modern Architecture**: Built with React 18 and Vite for lightning-fast performance
- **Secure Authentication**: Firebase-powered authentication with Google Sign-in support
- **Responsive Design**: Tailwind CSS ensures perfect display on all devices
- **Real-time Updates**: Live data synchronization across all connected clients
- **User-Friendly**: Intuitive interface designed for educators and administrators

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Backend & Database | Development Tools | UI/UX |
|----------|-------------------|-------------------|--------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white) | ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) | ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | ![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white) | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) | ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) |
| ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) | | ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) | ![React Icons](https://img.shields.io/badge/react%20icons-61DAFB?style=for-the-badge&logo=react&logoColor=black) |

</div>

### 🔧 Core Technologies

- **⚛️ React 18.3.1** - Modern UI library with hooks and functional components
- **⚡ Vite 6.0.5** - Next-generation frontend tooling for blazing fast development
- **🔥 Firebase 11.2.0** - Backend-as-a-Service for authentication and database
- **🎨 Tailwind CSS 3.4.17** - Utility-first CSS framework for rapid UI development
- **🧭 React Router 7.1.3** - Declarative routing for React applications
- **📡 Axios 1.7.9** - Promise-based HTTP client for API requests

---

## ✨ Features

### 🔐 **Authentication & Security**
- ✅ User registration and login system
- ✅ Google Sign-in integration
- ✅ Secure Firebase authentication
- ✅ Protected routes and role-based access

### 👨‍🎓 **Student Management**
- ✅ Student profile creation and management
- ✅ Student dashboard with personal information
- ✅ Student detail pages with comprehensive data
- ✅ Student enrollment and class assignment

### 📚 **Class Management**
- ✅ Create and manage classes
- ✅ Class forms for easy data entry
- ✅ Student-class relationship management
- ✅ Real-time class updates

### 🎨 **User Experience**
- ✅ Responsive design for all screen sizes
- ✅ Modern and intuitive interface
- ✅ Toast notifications for user feedback
- ✅ Smooth navigation and transitions
- ✅ Dark/Light theme support (Coming Soon)

### 📱 **Progressive Features**
- ✅ Fast loading with Vite optimization
- ✅ Component-based architecture
- ✅ Reusable UI components
- ✅ SEO-friendly routing

---

## 🚀 Installation

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 16.0 or higher) 📦
- **npm** or **yarn** package manager 🔧
- **Git** for version control 🔄

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TechRangers2-0/Codes.git
   cd Codes
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env file in the root directory
   touch .env
   
   # Add your Firebase configuration
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application 🌐

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

---

## 💻 Usage

### 🏠 **Getting Started**

1. **Register/Login**: Create a new account or login with existing credentials
2. **Google Sign-in**: Use Google authentication for quick access
3. **Dashboard**: Access your personalized dashboard
4. **Manage Students**: Add, edit, and manage student information
5. **Class Management**: Create and organize classes

### 🔑 **Key Components**

| Component | Description | Route |
|-----------|-------------|--------|
| **Home** | Landing page with overview | `/` |
| **Authentication** | Login and signup forms | `/login`, `/signup` |
| **Student Dashboard** | Main student interface | `/StuDashboard` |
| **Profile** | User profile management | `/profile` |
| **Class Form** | Class creation and editing | `/classForm` |
| **Student Details** | Detailed student information | `/stuDetailPage` |

### 📱 **API Integration**

The application uses Axios for HTTP requests and Firebase for backend services:

```javascript
// Example API call
import axios from './api/axios';

const fetchStudentData = async (studentId) => {
  try {
    const response = await axios.get(`/students/${studentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching student data:', error);
  }
};
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help improve the Student Management System:

### 🌟 **How to Contribute**

1. **Fork the Project**
   ```bash
   # Click the Fork button on GitHub
   ```

2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

### 📝 **Contribution Guidelines**

- **Code Style**: Follow the existing code style and use ESLint
- **Testing**: Write tests for new features when applicable
- **Documentation**: Update documentation for any new features
- **Commits**: Use clear and descriptive commit messages
- **Issues**: Check existing issues before creating new ones

### 🐛 **Reporting Bugs**

1. **Check existing issues** to avoid duplicates
2. **Use the bug report template** when creating new issues
3. **Provide detailed information** including:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Environment details

### 💡 **Requesting Features**

1. **Search existing feature requests** to avoid duplicates
2. **Use the feature request template**
3. **Provide clear description** of the proposed feature
4. **Explain the use case** and benefits

---

## 👥 Team

<div align="center">

### 🚀 **TechRangers 2.0**

Meet the amazing team behind the Student Management System:

| Avatar | Name | Profile |
| ------ | ---- | ------- |
| <img src="https://avatars.githubusercontent.com/u/154905590?v=4" width="48" /> | Hari-hara7 | [GitHub](https://github.com/Hari-hara7) |
| <img src="https://avatars.githubusercontent.com/u/165381842?v=4" width="48" /> | CodeAnup | [GitHub](https://github.com/CodeAnup) |
| <img src="https://avatars.githubusercontent.com/u/149568430?v=4" width="48" /> | KrithikaRaviraj | [GitHub](https://github.com/KrithikaRaviraj) |
| <img src="https://avatars.githubusercontent.com/in/29110?v=4" width="48" /> | dependabot[bot] | [GitHub](https://github.com/apps/dependabot) |
| <img src="https://avatars.githubusercontent.com/in/1143301?v=4" width="48" /> | Copilot | [GitHub](https://github.com/apps/copilot-swe-agent) |

### 🤝 **Want to Join Our Team?**

We're always looking for passionate developers to join our mission of improving educational technology. Check out our [Contributing Guidelines](#-contributing) to get started!

[![Contributors](https://img.shields.io/badge/All_Contributors-1-orange.svg?style=flat-square)](#contributors)

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 TechRangers 2.0

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🆘 Support

<div align="center">

### 💬 **Need Help?**

We're here to help you get the most out of the Student Management System!

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-red?style=for-the-badge&logo=github)](https://github.com/TechRangers2-0/Codes/issues)
[![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-purple?style=for-the-badge&logo=github)](https://github.com/TechRangers2-0/Codes/discussions)

### 📞 **Contact Methods**

- 🐛 **Bug Reports**: [Create an Issue](https://github.com/TechRangers2-0/Codes/issues/new)
- 💡 **Feature Requests**: [Request a Feature](https://github.com/TechRangers2-0/Codes/issues/new)
- 💬 **General Questions**: [Start a Discussion](https://github.com/TechRangers2-0/Codes/discussions)
- 📧 **Direct Contact**: Open an issue and we'll respond promptly

### 🔧 **Troubleshooting**

**Common Issues:**
- **Build Errors**: Make sure you have Node.js 16+ installed
- **Firebase Issues**: Check your environment variables are set correctly
- **Dependency Issues**: Try deleting `node_modules` and running `npm install` again

</div>

---

<div align="center">

### ⭐ **Star this repository if you found it helpful!**

[![Star History Chart](https://api.star-history.com/svg?repos=TechRangers2-0/Codes&type=Date)](https://star-history.com/#TechRangers2-0/Codes&Date)

**Made with ❤️ by [TechRangers 2.0](https://github.com/TechRangers2-0)**

---

*© 2024 TechRangers 2.0. All rights reserved.*

</div>
