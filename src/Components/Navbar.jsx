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
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState('false');
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobile, setIsMobile] = useState('false');
  const [menuSlideIndex, setMenuSlideIndex] = useState('false');

  // Menu slides data
  const MENU_SLIDES = [
    {
      title: "Navigation",
      items: [
        { name: "Home", link: "/", icon: <FaHome className="text-green-400" /> },
        { name: "About", link: "/about", icon: <FaUser className="text-pink-400" /> },
        { name: "Resume", link: "/resume", icon: <FaFileAlt className="text-orange-400" /> },
      ]
    },
    {
      title: "Portfolio",
      items: [
        { name: "Portfolio", link: "/portfolio", icon: <FaBriefcase className="text-blue-400" /> },
        { name: "Contact", link: "/contact", icon: <FaEnvelope className="text-yellow-400" /> },
        { name: "Blog", link: "/blog", icon: <FaFileAlt className="text-purple-400" /> },
      ]
    },
    {
      title: "Services",
      items: [
        { name: "Web Design", link: "/web-design", icon: <FaHome className="text-red-400" /> },
        { name: "Development", link: "/development", icon: <FaUser className="text-teal-400" /> },
        { name: "Consulting", link: "/consulting", icon: <FaBriefcase className="text-indigo-400" /> },
      ]
    }
  ];

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } 
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      link: "https://www.instagram.com",
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

  const nextSlide = () => {
    setMenuSlideIndex((prev) => (prev + 1) % MENU_SLIDES.length);
  };

  const prevSlide = () => {
    setMenuSlideIndex((prev) => (prev - 1 + MENU_SLIDES.length) % MENU_SLIDES.length);
  };

  return (
    <>
      {/* Enhanced Slide Show Menu Button */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white shadow-2xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
        >
          {/* Animated bars */}
          <div className="relative w-6 h-6">
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isOpen ? 'opacity-0 rotate-90' : 'opacity-100'
            }`}>
              <FaBars className="text-xl" />
            </div>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0 -rotate-90'
            }`}>
              <FaTimes className="text-xl" />
            </div>
          </div>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
        </button>

        {/* Slide Navigation Buttons */}
        {isOpen && (
          <div className="flex gap-1">
            <button
              onClick={prevSlide}
              className="p-3 bg-gray-800 rounded-lg text-white shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              title="Previous Menu"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-gray-800 rounded-lg text-white shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              title="Next Menu"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        )}
      </div>

      {/* Slide Indicators */}
      {isOpen && (
        <div className="fixed top-20 left-4 z-50 flex gap-1">
          {MENU_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setMenuSlideIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                menuSlideIndex === index 
                  ? 'bg-blue-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col justify-between py-8 px-6 shadow-2xl z-40 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${!isMobile ? "translate-x-0" : ""}`}
      >
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-lg animate-pulse-slow">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl font-bold">
              KB
            </div>
          </div>
          <h1 className="text-2xl font-bold hover:text-yellow-400 cursor-pointer transition duration-300">
            Kunal<span className="text-blue-400">Bansal</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">Full Stack Developer</p>
        </div>

        <div className="flex-1 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${menuSlideIndex * 100}%)` }}
          >
            {MENU_SLIDES.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                <h3 className="text-lg font-bold text-center mb-6 text-cyan-400 border-b border-gray-700 pb-2">
                  {slide.title}
                </h3>
                
                <nav>
                  <ul className="space-y-3">
                    {slide.items.map(({ name, link, icon }, index) => (
                      <li key={index}>
                        <a
                          href={link}
                          onClick={() => handleLinkClick(name)}
                          className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group relative overflow-hidden ${
                            activeLink === name
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                              : "hover:bg-gray-800 hover:text-cyan-400"
                          }`}
                        >
                          <div
                            className={`transition-transform duration-300 ${
                              activeLink === name ? "scale-110" : "group-hover:scale-110"
                            }`}
                          >
                            {icon}
                          </div>
                          
                         <span
                            className={`font-medium transition-all duration-300 ${
                              activeLink === name ? "translate-x-1" : "group-hover:translate-x-1"
                            }`}
                          >
                            {name}
                          </span>

                          {activeLink === name && (
                            <div className="absolute right-3 w-2 h-2 bg-white rounded-full animate-ping" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Progress */}
        <div className="flex justify-center gap-2 mt-4">
          {MENU_SLIDES.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                menuSlideIndex === index 
                  ? 'bg-blue-400 w-8' 
                  : 'bg-gray-600 w-2 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <div className="mt-8">
          <p className="text-gray-400 text-sm text-center mb-4">Follow me on</p>
          <div className="flex justify-center gap-3 text-xl">
            {ICONS_DATA.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={`${item.css} transition-all duration-300 hover:scale-125 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transform hover:rotate-12`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 pt-4 border-t border-gray-700">
          <p className="text-gray-400 text-xs">
            Slide {menuSlideIndex + 1} of {MENU_SLIDES.length}
          </p>
        </div>
      </aside>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}