import { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="Editedindex.html" className="flex-shrink-0">
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300">
              EduTrack
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mr-5">
                <NavLink
                to="/"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-700' } "text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                to="/About"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-700'} "text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200`
                  }
                >
                  About
                </NavLink>
                <NavLink
                to="/Contact"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-700'} "text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200`
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                to="/StuDashboard"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-700'} "text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200`
                  }
                >
                  Features
                </NavLink>
                <NavLink
                to="/account-created"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-700'} "text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200`
                  }
                >
                  Account
                </NavLink>
            
                <NavLink
                to="/SignUp"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-700'} "text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200`
                  }
                >
                  SignUp
                </NavLink>
                
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none mr-5"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 mr-14">
            <div className="flex flex-col space-y-4">
            <NavLink
                to="/"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-700'} "text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                to="/About"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-700'} "text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200`
                  }
                >
                  About
                </NavLink>
                <NavLink
                to="/Contact"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-700'} "text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200`
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                to="/StuDashboard"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-700'} "text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200`
                  }
                >
                  Features
                </NavLink>
              <a href="signUp.html" className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full text-center hover:shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-200">
                Sign Up
              </a>
              <a href="EditedDashboard.html" className="hidden mx-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full text-center hover:shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-200">
                Dashboard
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;