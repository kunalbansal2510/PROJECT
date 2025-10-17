import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaUser,
  FaServicestack,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

export default function Navbar() {
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
      css: "text-gray-300 hover:text-black",
    },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-65 bg-gray-900 text-white flex flex-col justify-between py-8 px-6 shadow-2xl">
      <div>
        <h1 className="text-3xl font-bold mb-10 text-center hover:text-yellow-400 cursor-pointer transition duration-300">
          Kunal<span className="text-blue-400">Bansal</span>
        </h1>

        <ul className="space-y-6 text-lg font-medium">
          {NAV_MENU.map(({ name, link, icon }, index) => (
            <li key={index}>
              <a
                href={link}
                className="flex items-center gap-3 hover:text-cyan-400 transition duration-300"
              >
                {icon}
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center gap-4 mt-10 text-2xl">
        {ICONS_DATA.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={`${item.css} transition duration-300 hover:scale-110`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </aside>
  );
}
