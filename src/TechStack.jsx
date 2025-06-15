import React, { useState } from "react";
import Box from "./components/box";
import Container from "./components/container";

const allTechnologies = [
  {
    title: "React.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "PHP",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    title: "Laravel",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    title: "Java",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    title: "HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    title: "CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    title: "Javascript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    title: "MySQL",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
  },
  {
    title: "Bootstrap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  },
  {
    title: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    title: "Inertia",
    image: "https://avatars.githubusercontent.com/u/47703742?s=200&v=4",
  },
  {
    title: "Shadcn UI",
    image:
      "https://th.bing.com/th/id/OIP.beVjRiHFNXgyqzqo1Ra27wAAAA?w=154&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  { title: "Flowbite", image: "https://flowbite.com/docs/images/logo.svg" },
  {
    title: "Git",
    image:
      "https://images.icon-icons.com/2107/PNG/96/file_type_git_icon_130581.png",
  },
  {
    title: "Google Cloud",
    image:
      "https://images.icon-icons.com/2699/PNG/96/google_cloud_logo_icon_171058.png",
  },
  {
    title: "RESTful API",
    image: "https://cdn-icons-png.flaticon.com/128/15435/15435224.png",
  },
];

const mainTechnologies = [
  "React.js",
  "Laravel",
  "Java",
  "Git",
  "Inertia",
  "Tailwind CSS",
];

export default function TechStack() {
  const [showAll, setShowAll] = useState(false);

  const displayedTechnologies = showAll
    ? allTechnologies
    : allTechnologies.filter((tech) => mainTechnologies.includes(tech.title));

  return (
    <Container className="space-y-4 transition duration-300 hover:border-white">
      <h3 className="font-medium text-[#9229A8] text-lg">Technologies</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 justify-items-center">
        {displayedTechnologies.map((tech) => (
          <Box key={tech.title} image={tech.image} title={tech.title} />
        ))}
      </div>

      {showAll && (
        <div className="text-gray-400 text-xs text-center">
          Disclaimer: This list includes all the technologies I have worked with
          in the past. It does not necessarily reflect my current level of
          proficiency or expertise in each.
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-2 text-sm">
        <button
          onClick={() => setShowAll(false)}
          className={`px-3 py-1 rounded ${
            !showAll
              ? "bg-white text-[#101828]"
              : "text-white border border-white/30"
          }`}
        >
          Main Technologies
        </button>
        <button
          onClick={() => setShowAll(true)}
          className={`px-3 py-1 rounded ${
            showAll
              ? "bg-white text-[#101828]"
              : "text-white border border-white/30"
          }`}
        >
          All Technologies
        </button>
      </div>
    </Container>
  );
}
