
export const Footer = () => {
  return (
    <>
    <footer className="bg-blue-900 text-white py-12">      
    <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
            <div>
                <h3 className="text-xl font-bold mb-4">About EduTrack</h3>
                <p className="text-gray-200">
                    Empowering students worldwide with innovative learning tools, collaborative features, and smart productivity solutions.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li><a href="Editedindex.html" className="hover:text-gray-200 transition-colors">Home</a></li>
                    <li><a href="aboutUs.html" className="hover:text-gray-200 transition-colors">About Us</a></li>
                    <li><a href="contactUs.html" className="hover:text-gray-200 transition-colors">Contact</a></li>
                    <li><a href="features.html" className="hover:text-gray-200 transition-colors">Features</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                    <li>
                        <a href="mailto:anupc9605@gmail.com" className="hover:text-gray-200 transition-colors">
                            anupc9605@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:8762256023" className="hover:text-gray-200 transition-colors">
                            +91 8762256023
                        </a>
                    </li>
                    <li>
                        <a href="tel:8618027420" className="hover:text-gray-200 transition-colors">
                            +91 8618027420
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <hr className="my-8 border-white/20"/>
        <p className="text-center text-gray-200">&copy; 2025 EduTrack. All rights reserved.</p>
    </div>
</footer>

    </>
  )
}
export default Footer
