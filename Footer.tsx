import { Linkedin, Instagram, Youtube, Facebook, Mail } from 'lucide-react';
import Logo from '../assets/logo.png'; // Correct path


export default function Footer() {
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/cyberbind-company/", label: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com/@cyber_bind?si=mmRT5_QViP40lKFn", label: "YouTube" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/cyber_bind?igsh=MThsMmRtem83czFybw==", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=61568873834984&mibextid=ZbWKwL", label: "Facebook" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@cyberbind.in", label: "Email" },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Internships', href: '#internships' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-4">
            <img src={Logo} alt="Cyber Bind Logo" className="h-12 w-12" />

              <span className="text-2xl font-bold text-white">Cyber Bind</span>
            </div>
            <p className="mt-4 text-base text-gray-400 max-w-lg">
              Cyber Bind is a leading platform that bridges the gap between aspiring professionals and the tech industry. 
              We empower individuals through cutting-edge training, hands-on projects, and mentorship programs in fields like 
              Artificial Intelligence, Machine Learning, Data Science, Web Development, and UI/UX Design.
            </p>
            <p className="mt-4 text-base text-gray-400 max-w-lg">
              Our mission is to cultivate innovation and equip the next generation of leaders with the skills, experience, 
              and knowledge they need to excel in today's competitive world. Join us on this transformative journey 
              and be part of the future of technology!
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Connect With Us
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.label}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()} Cyber Bind. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
