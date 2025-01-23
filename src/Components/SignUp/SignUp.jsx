import {useState} from 'react';
import SignInWithGoogle from '../SignInWithGoogle/SignInWithGoogle';
const SignUp= () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignInClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignUpClick = () => {
    setIsRightPanelActive(false);
  };
  return (
    <>
    

      <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed bg-gray-300 pt-16">
        <div
          className={`w-[90%] max-w-[1000px] h-[500px] relative overflow-hidden shadow-lg mx-auto 
                   bg-white/20 rounded-[20px] ${isRightPanelActive ? 'right-panel-active' : ''}`}
        >
          <div className="absolute w-full h-full flex transition-transform duration-600 ease-in-out">
            {/* Signup Form */}
            <div className="w-1/2 flex items-center justify-center bg-white/80 p-8">
              <form className="w-full max-w-xs">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md">
                  Sign Up
                </button>
                {/* <SignInWithGoogle/> */}
              </form>
            </div>

            {/* Login Form */}
            <div className="w-1/2 flex items-center justify-center bg-white/80 p-8">


              <form className="w-full max-w-xs">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md">
                  Sign In
                </button>
                <SignInWithGoogle/>
              </form>
            </div>
          </div>

          {/* Overlay Container */}
          <div
            className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform 
                     duration-1000 ease-in-out z-10 ${isRightPanelActive ? '-translate-x-full' : ''}`}
          >
            <div
              className={`bg-gradient-to-r from-[#4B34FF] to-[#433AF7] relative -left-full h-full 
                       w-[200%] transform ${isRightPanelActive ? 'translate-x-1/2' : 'translate-x-0'} 
                       transition-transform duration-1000 ease-in-out`}
            >
              {/* Left Panel */}
              <div
                className={`absolute flex flex-col items-center justify-center p-8 text-center 
                        text-white h-full w-1/2 transform ${isRightPanelActive ? 'translate-x-0' : '-translate-x-[20%]'} 
                        transition-transform duration-1000 ease-in-out`}
              >
                <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
                <p className="text-center mb-4">
                  I currently do not have an account. Please click below to create one and get started!
                </p>
                <button
                  className="border-white border text-white py-2 px-4 rounded-full" onClick={handleSignUpClick}
                >
                  {'<< Sign Up'}
                </button>
              </div>

              {/* Right Panel */}
              <div
                className={`absolute right-0 flex flex-col items-center justify-center p-8 text-center 
                        text-white h-full w-1/2 transform ${isRightPanelActive ? 'translate-x-[20%]' : 'translate-x-0'} 
                        transition-transform duration-1000 ease-in-out`}
              >
                <h2 className="text-2xl font-bold mb-4">Hello!</h2>
                <p className="text-center mb-4">
                  Do you already have an account? Please login with your personal info
                </p>
                <button
                  onClick={handleSignInClick}
                  className="border-white border text-white py-2 px-4 rounded-full"
                >
                  {'Sign In >>'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
