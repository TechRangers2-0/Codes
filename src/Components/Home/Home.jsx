import image1 from '../../assets/image1.jpg'

export const Home = () => {
  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 gradient-bg"></div>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/50"></div>
                    <img src={image1} alt="Hero background" className="w-full h-full object-cover"/>
                </div>
            
                <div className="pt-10 md:pt-5 relative z-20 text-center px-6 max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                        Manage Student Record with
                        <span className="bg-clip-text pl-3 text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                            EduTrack
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                        All in one Educational Management System
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="features.html" className="group px-8 py-4 bg-white text-indigo-600 rounded-full text-lg font-medium hover:bg-indigo-50 transition-all hover-glow flex items-center gap-2">
                            Explore Features
                            <i className="fas fa-arrow-right transition-transform group-hover:translate-x-2"></i>
                        </a>
                        <a href="signUp.html" className="px-8 py-4 glass-card text-white rounded-full text-lg font-medium hover:bg-white/20 transition-all hover-glow">
                            Get Started Free
                        </a>
                    </div>
                </div>
            
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative w-full h-24">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                            fill="#ffffff"/>
                    </svg>
                </div>
            </section>
            
           
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        Powerful Features
                    </h2>
            
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="feature-card bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                                <i className="fas fa-list-check text-2xl text-white"></i>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Update Attendence</h3>
                            <p className="text-gray-600">Organize tasks intelligently with AI-powered prioritization and smart reminders.</p>
                        </div>
            
                        <div className="feature-card bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                                <i className="fas fa-chart-line text-2xl text-white"></i>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Update Marks</h3>
                            <p className="text-gray-600">A structured plan to allocate time for effective learning activities.</p>
                        </div>
            
                        <div className="feature-card bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                                <i className="fas fa-clock text-2xl text-white"></i>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get Student Details</h3>
                            <p className="text-gray-600">Boost productivity with our advanced Pomodoro timer and focus tracking system.</p>
                        </div>
                    </div>
            
                    <div className="text-center mt-16">
                        <a href="aboutUs.html" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-all hover-glow">
                           More About us
                        </a>
                    </div>
                </div>
            </section>
    </>
  )
}
export default Home
