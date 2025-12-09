import { useState } from "react";
import Container from "./components/Container";

const techIcons = {
  "React.js": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "Laravel": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  "PHP": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  "MySQL": "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
  "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "Git": "https://images.icon-icons.com/2107/PNG/96/file_type_git_icon_130581.png",
  ".NET / VB .NET": "https://tse2.mm.bing.net/th/id/OIP.a5JQ4v4pMnKAJUUh7wC-DAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  "RESTful API": "https://cdn-icons-png.flaticon.com/128/15435/15435224.png",
  "Bootstrap": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  "Shadcn UI": "https://th.bing.com/th/id/OIP.beVjRiHFNXgyqzqo1Ra27wAAAA?w=154&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  "Flowbite": "https://flowbite.com/docs/images/logo.svg",
  "Inertia.js": "https://tse4.mm.bing.net/th/id/OIP.IH_woZpsNdY5edvRFhma0AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  "Google Cloud": "https://images.icon-icons.com/2699/PNG/96/google_cloud_logo_icon_171058.png",
  "Ngrok": "https://th.bing.com/th/id/OIP.DHaNUAzEr36T3SYMbQKDQgAAAA?w=144&h=150&c=7&r=0&o=7&pid=1.7&rm=3",
  "Figma": "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
  "Tesseract.js (OCR)": "https://th.bing.com/th/id/OIP.g_FaHpdh-pnxUOyRHC6vPgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  "Java": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  "HTML & CSS": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
};

const allTechnologies = [
  "React.js",
  "Laravel",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "Git",
  ".NET / VB .NET",
  "RESTful API",
  "Bootstrap",
  "Shadcn UI",
  "Flowbite",
  "Inertia.js",
  "Google Cloud",
  "Ngrok",
  "Figma",
  "Tesseract.js (OCR)",
  "Java",
  "HTML & CSS",
];

const mainTechnologies = [
  "React.js",
  "Laravel",
  ".NET / VB .NET",
  "Git",
  "RESTful API",
  "Tailwind CSS",
  "Inertia.js"
];

export default function TechStack() {
  const [showAll, setShowAll] = useState(false);

  const displayedTechnologies = showAll ? allTechnologies : mainTechnologies;

  return (
    <Container className="space-y-6 transition duration-300 hover:border-white/40">
 
      <h3 className="text-[#9229A8] font-medium uppercase tracking-wide">
        Technologies
      </h3>

      {/* TECHNOLOGY LIST */}
      <ul
        className={`grid gap-3
          grid-cols-4 sm:grid-cols-4 md:grid-cols-5`}
      >
        {displayedTechnologies.map((tech) => (
          <li
            key={tech}
            className="flex flex-col items-center gap-1 text-gray-300 hover:text-white transition relative group"
          >
            <img
              src={techIcons[tech]}
              alt={tech}
              className="w-6 h-6"
            />
            <span
              className={`text-xs text-center 
                ${showAll ? "hidden sm:block" : "block"} 
              `}
            >
              {tech}
            </span>
          </li>
        ))}
      </ul>

      <p className={` text-gray-400 italic text-xs text-center mt-2 ${showAll == false ? "hidden" : "block"}`}>
        Disclaimer: This list highlights technologies I’ve used before, not necessarily the ones I’m most confident with..
      </p>

      <div className="flex flex-wrap justify-center gap-2 text-sm mt-4">
        <button
          onClick={() => setShowAll(false)}
          className={`px-3 py-1 rounded ${
            !showAll
              ? "bg-white text-[#101828] drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]"
              : "text-white border border-white/30"
          }`}
        >
          Main Stack
        </button>
        <button
          onClick={() => setShowAll(true)}
          className={`px-3 py-1 rounded ${
            showAll
              ? "bg-white text-[#101828] drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]"
              : "text-white border border-white/30"
          }`}
        >
          All Technologies
        </button>
      </div>
    </Container>
  );
}
