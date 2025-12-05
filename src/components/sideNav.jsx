import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "ABOUT ME" },
  { id: "technologies", label: "TECHNOLOGIES" },
  { id: "projects", label: "PROJECTS" },
];

export default function SideNav({className}) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
  const handleScroll = () => {
    let current = sections[0].id;
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top <= 120) current = id;
      }
    });
    setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav className={`lg:flex flex-col gap-y-4 font-sans ${className}`}>
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`flex items-center gap-3 text-xs tracking-widest transition-colors duration-200 ${
            activeSection === id ? "text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]" : "text-gray-400"
          }`}
        >
          <span
            className={`block h-px transition-all duration-200 ${
              activeSection === id
                ? "w-9 bg-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                : "w-6 bg-gray-600"
            }`}
          />
          {label}
        </a>
      ))}
    </nav>
  );
}
