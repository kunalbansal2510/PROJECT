import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const NAV_MENU = [
    { name: "Home", link: "/", icon: <FaHome className="text-green-400" /> },
    { name: "About", link: "/about", icon: <FaUser className="text-pink-400" /> },
    { name: "Resume", link: "/resume", icon: <FaFileAlt className="text-orange-400" /> },
    { name: "Portfolio", link: "/portfolio", icon: <FaBriefcase className="text-blue-400" /> },
    { name: "Contact", link: "/contact", icon: <FaEnvelope className="text-yellow-400" /> },
  ];

  const ICONS_DATA = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://facebook.com",
      css: "text-blue-600 hover:text-blue-700",
    },
    {
      name: "Instagram",
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/official_kunal_bansal/",
      css: "text-pink-600 hover:text-pink-700",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      link: "https://linkedin.com",
      css: "text-blue-500 hover:text-blue-600",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com",
      css: "text-gray-300 hover:text-white",
    },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-3 bg-gray-900 rounded-lg text-white shadow-2xl hover:bg-gray-800 transition-all duration-300"
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      )}

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col justify-between py-8 px-6 shadow-2xl z-40 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${!isMobile ? "translate-x-0" : ""}`}
      >
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl font-bold">
              KB
            </div>
          </div>
          <h1 className="text-2xl font-bold hover:text-yellow-400 cursor-pointer transition duration-300">
            Kunal<span className="text-blue-400">Bansal</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">Full Stack Developer</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
          <ul className="space-y-3">
            {NAV_MENU.map(({ name, link, icon }, index) => (
              <li key={index}>
                <a
                  href={link}
                  onClick={() => handleLinkClick(name)}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group relative overflow-hidden ${
                    activeLink === name
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "hover:bg-gray-800 hover:text-cyan-400"
                  }`}
                >
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 ${
                      activeLink === name ? "scale-100" : "scale-0 group-hover:scale-100"
                    }`}
                    style={{ zIndex: -1 }}
                  />
                  
                  {/* Icon with bounce animation */}
                  <div
                    className={`transition-transform duration-300 ${
                      activeLink === name ? "scale-110" : "group-hover:scale-110"
                    }`}
                  >
                    {icon}
                  </div>
                  
                  {/* Text with slide animation */}
                  <span
                    className={`font-medium transition-all duration-300 ${
                      activeLink === name ? "translate-x-1" : "group-hover:translate-x-1"
                    }`}
                  >
                    {name}
                  </span>

                  {/* Active indicator dot */}
                  {activeLink === name && (
                    <div className="absolute right-3 w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="mt-8">
          <p className="text-gray-400 text-sm text-center mb-4">Follow me on</p>
          <div className="flex justify-center gap-4 text-xl">
            {ICONS_DATA.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={`${item.css} transition-all duration-300 hover:scale-125 p-2 rounded-full bg-gray-800 hover:bg-gray-700`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 pt-4 border-t border-gray-700">
          <p className="text-gray-400 text-xs">
            © 2024 Kunal Bansal
          </p>
        </div>
      </aside>

      {/* Main content area adjustment */}
      {!isMobile && <div className="ml-64"></div>}
    </>
  );
}