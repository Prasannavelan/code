import { Menu, X } from 'lucide-react'; // Only importing the used icons
import { useState } from 'react';
import Logo from '../assets/headerlogo.png'; // Correct path to the logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '#' },
    { title: 'About Us', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Internships', href: '#internships' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
  ];

  // Function to scroll to the internships section when the "Apply Now" button is clicked
  const handleApplyClick = () => {
    const internshipSection = document.getElementById('internships');
    if (internshipSection) {
      internshipSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {/* Logo on the left */}
            <a href="#" className="flex items-center space-x-2">
              <img src={Logo} alt="Cyber Bind Logo" className="h-12 w-12" />
              <span className="text-xl font-bold" style={{ fontFamily: 'Yeseva One' }}>
                <span className="text-[#fe710d]">Cyber</span>
                <span className="text-[#1897e1]"> Bind</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.title}
                </a>
              ))}
              {/* Apply Now Button */}
              <button
                onClick={handleApplyClick} // Scroll to internships section
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
            {/* Apply Now Button */}
            <button
              onClick={handleApplyClick} // Scroll to internships section
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
