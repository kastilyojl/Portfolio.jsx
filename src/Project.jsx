import React, { useEffect } from "react";
import Container from "./components/container";
import Portfolio from "./assets/portfolio.png";
import Enrollment2023 from "./assets/enrollment2023.png";
import Enrollment2025 from "./assets/Enrollment2025.png";
import codingChallenge from "./assets/codingChallenge.png";
import Portfolio2025 from "./assets/portfolio2025.png";

export default function Project() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  const projects = [
    {
      title: "Portfolio v2",
      image: Portfolio2025,
      description:
        "This is my second portfolio website. A static website built using React.js and Tailwind CSS to showcase my projects and skills.",
      links: [
        {
          name: "Repository Link",
          icon: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
          url: "https://github.com/kastilyojl/Portfolio.jsx",
        },
        {
          name: "Project Link",
          icon: "https://cdn-icons-png.flaticon.com/128/282/282100.png",
          url: "https://portfolio-jsx-2keh.vercel.app/",
        },
      ],
      technologies: [
        {
          name: "React JS",
          icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
        },

        {
          name: "Tailwind",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
      ],
    },
    {
      title: "Enrollment System v2",
      image: Enrollment2025,
      description:
        "Thesis project featuring an Enrollment System with OCR integration for scanning registration forms, data analysis using the XGBoost algorithm, and Role-Based Access Control (RBAC) for secure user access management. The system supports five user roles: Super Admin, Registrar, Accounting, Professor, and Student.",
      links: [
        {
          name: "Key Process Demo",
          icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
          url: "https://youtu.be/PLVc0pqBGoc?si=Go4hovhR4C8-vG_5",
        },
        {
          name: "Repository Link (Private)",
          icon: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
          url: "https://github.com/kastilyojl/EnrollmentThesis",
        },
      ],
      technologies: [
        {
          name: "React JS",
          icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
        },
        {
          name: "Laravel",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
        },
        {
          name: "Inertia",
          icon: "https://avatars.githubusercontent.com/u/47703742?s=200&v=4",
        },
        {
          name: "Shadcn/UI",
          icon: "https://th.bing.com/th/id/OIP.beVjRiHFNXgyqzqo1Ra27wAAAA?w=154&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        },
        {
          name: "Flowbite",
          icon: "https://flowbite.com/docs/images/logo.svg",
        },
        {
          name: "Python",
          icon: "https://cdn-icons-png.flaticon.com/128/3098/3098090.png",
        },
        {
          name: "Tailwind",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
      ],
    },
    {
      title: "Coding Challenge",
      image: codingChallenge,
      description:
        "This project was developed as part of my internship application exam. It includes login, registration, and a homepage. The frontend communicates with the backend through APIs, secured using JSON Web Token (JWT) authentication.",
      links: [
        {
          name: "Project Demo",
          icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
          url: "https://youtu.be/Dqv0Vhv9E9w",
        },
        {
          name: "Repository Link",
          icon: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
          url: "https://github.com/kastilyojl/Coding-Challenge",
        },
        {
          name: "Prototype Link",
          icon: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
          url: "https://www.figma.com/file/kxfsQomPqhDfMVOK9uNy10/Templates",
        }
      ],
      technologies: [
        {
          name: "React JS",
          icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
        },
        {
          name: "Laravel",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
        },
        {
          name: "Tailwind",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
        {
          name: "RESTful API",
          icon: "https://cdn-icons-png.flaticon.com/128/15435/15435224.png",
        },
        {
          name: "Figma",
          icon: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
        },
      ],
    },
    {
      title: "Portfolio v1",
      image: Portfolio,
      description:
        "This is my first portfolio website. A static website built using HTML, CSS, Javascript and Bootstrap to showcase my projects and skills.",
      links: [
        {
          name: "Repository Link",
          icon: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
          url: "https://github.com/kastilyojl/Kast1ly0-Folio",
        },
        {
          name: "Project Link",
          icon: "https://cdn-icons-png.flaticon.com/128/282/282100.png",
          url: "https://kastilyojl.github.io/Kast1ly0-Folio",
        },
      ],
      technologies: [
        {
          name: "HTML",
          icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        },
        {
          name: "CSS",
          icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        },
        {
          name: "JavaScript",
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
        },
      ],
    },
    {
      title: "Enrollment System v1",
      image: Enrollment2023,
      description:
        "Developed a proposed Enrollment System for our Software Engineering course, integrating a Decision Tree algorithm to predict student eligibility for enrollment based on their academic performance and records.",
      links: [
        {
          name: "Key Process Demo",
          icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
          url: "https://youtu.be/Vlb-YuNlLfw",
        },
        {
          name: "Repository Link",
          icon: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
          url: "https://github.com/kastilyojl/Enrollment-Management-System",
        },
        {
          name: "Project Link",
          icon: "https://cdn-icons-png.flaticon.com/128/282/282100.png",
          url: "https://enrollinacademy.infinityfreeapp.com/",
        },
      ],
      technologies: [
        {
          name: "HTML",
          icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        },
        {
          name: "CSS",
          icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        },
        {
          name: "Javascript",
          icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
        },
        {
          name: "PHP",
          icon: "https://cdn-icons-png.flaticon.com/128/15474/15474204.png",
        },
        {
          name: "MySQL",
          icon: "https://cdn-icons-png.flaticon.com/128/1199/1199128.png",
        },
      ],
    },
  ];

  return (
    <Container>
      <h3 className="font-medium text-[#9229A8] sm:text-lg mb-4">Projects</h3>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <div
            data-aos="zoom-in-up"
            key={i}
            className="flex flex-col md:flex-row items-start gap-4 border border-white/10 p-2 rounded transition duration-300 hover:border-white"
          >
            <img
              alt={project.title}
              src={project.image}
              className="w-full md:w-60 h-36 rounded object-cover"
            />

            <div className="flex-1">
              <h3 className="font-medium text-white sm:text-lg">
                {project.title}
              </h3>
              <p className="mt-1 text-gray-400">{project.description}</p>

              {/* Links */}
            {project.links && (
              <div className="flex flex-col gap-2 mt-2">
                {project.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.name === "Repository Link (Private)" ? "#" : link.url}
                    target={link.name === "Repository Link (Private)" ? "" : "_blank"}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (link.name === "Repository Link (Private)") {
                        e.preventDefault();
                        alert("This repository is private. Please contact me for access.");
                      }
                    }}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={link.icon}
                      alt={link.name}
                      className="w-5 h-5 hover:opacity-80"
                    />
                    <span className="text-white text-xs">{link.name}</span>
                  </a>
                ))}
              </div>
            )}

              {/* {project.links && (
                <div className="flex flex-col gap-2 mt-2 ">
                  {project.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="w-5 h-5 hover:opacity-80"
                      />
                      <span className="text-white text-xs">{link.name}</span>
                    </a>
                  ))}
                </div>
              )} */}

              {/* Technologies */}
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, j) => (
                    <div
                      key={j}
                      className="inline-flex items-center gap-1 bg-white/10 rounded px-2 py-1"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        title={tech.name}
                        className="w-4 h-4"
                      />
                      <span className="text-[10px] text-gray-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
