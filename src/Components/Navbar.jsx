import { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaFilter, FaTimes } from "react-icons/fa";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const portfolioRef = useRef(null);

  // Portfolio data with images
  const PORTFOLIO_ITEMS = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
      description: "Cross-platform fitness tracking application with real-time analytics",
      technologies: ["React Native", "Firebase", "Redux"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
      description: "Real-time analytics dashboard with interactive charts and reports",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false
    },
    {
      id: 4,
      title: "Social Media App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=400&fit=crop",
      description: "Social networking platform with real-time messaging and media sharing",
      technologies: ["Flutter", "Node.js", "Socket.io", "AWS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false
    },
    {
      id: 5,
      title: "AI Chatbot",
      category: "ai",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=400&fit=crop",
      description: "Intelligent chatbot using natural language processing and machine learning",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
      description: "Modern portfolio website with smooth animations and responsive design",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false
    }
  ];

  const FILTERS = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Development" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "ai", label: "AI & ML" }
  ];

  const filteredItems = activeFilter === "all" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-4" ref={portfolioRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of my latest projects and creative works. Each project represents 
            a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <FaFilter className="text-sm" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Featured
                  </span>
                </div>
              )}

              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Quick Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-70">
                  <div className="flex gap-4">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="bg-white text-gray-900 p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </button>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-2 transition-all duration-300 group"
                  >
                    View Details
                    <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try selecting a different filter category</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 hover:scale-110"
              >
                <FaTimes className="text-lg" />
              </button>
              {selectedProject.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Featured Project
                  </span>
                </div>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <FaExternalLinkAlt />
                  View Live Demo
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                >
                  <FaGithub />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}