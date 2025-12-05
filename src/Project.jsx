import React, { useEffect, useState } from "react";
import Container from "./components/container";
import Portfolio from "./assets/portfolio.png";
import Enrollment2023 from "./assets/enrollment2023.png";
import Enrollment2025 from "./assets/Enrollment2025.png";
import codingChallenge from "./assets/codingChallenge.png";
import Portfolio2025 from "./assets/portfolio2025.png";
import OCR from "./assets/enrollment_v2/ocr.png";
import RBAC from "./assets/enrollment_v2/rbac.png";
import Dashboard from "./assets/enrollment_v2/dashboard.png";
import AuditTrail from "./assets/enrollment_v2/audit_trail.png";
import UserManagement from "./assets/enrollment_v2/user_management.png";
import ProjectModal from "./components/ProjectModal"

export default function Project({openModal}) {

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
      screenshots: [
        Enrollment2025,
        OCR,
        RBAC,
        AuditTrail,
        UserManagement,
        Dashboard
      ],
      driveLink: "https://drive.google.com/drive/folders/1SRunYskfypoo1ORxM8z2fQwC1vNDciyr?usp=sharing",
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
        {
          name: "System Screenshots",
          icon: "https://cdn-icons-png.flaticon.com/128/1375/1375106.png",
          action: "openScreenshots",
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
    <h3 className="font-medium uppercase text-[#9229A8] mb-6 text-lg">
      Projects
    </h3>

    <div className="space-y-8">
      {projects.map((project, i) => (
        <div
          key={i}
          data-aos="zoom-in-up"
          className="flex flex-col gap-4 p-4 rounded-xl border border-white/10 bg-black/10 backdrop-blur-[1px] hover:bg-white/4 hover:backdrop-blur-[4px] transition duration-300"
        >
          {/* Project Title */}
          <h4 className="text-white text-lg font-semibold">{project.title}</h4>

          {/* Description */}
          <p className="text-gray-400">{project.description}</p>

          {/* Images */}
          {project.screenshots || project.image ? (
            <div className="grid grid-cols-4 gap-2 mt-2">
              {(project.screenshots || [project.image])
                .slice(0, 4)
                .map((img, idx, arr) => {
                  const isLastVisible =
                    idx === 3 && (project.screenshots || [project.image]).length > 4;
                  return (
                    <div
                      key={idx}
                      className="relative cursor-pointer"
                      onClick={() => openModal(project)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      {isLastVisible && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-lg rounded-lg">
                          +{(project.screenshots || []).length - 4} more
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          ) : null}

          {/* Built With */}
          {project.technologies && (
            <div className="mt-3">
              <p className="text-gray-400 font-medium mb-2">Built with</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-1 px-2 py-1 rounded bg-[#101010] hover:bg-[#A855F7]/20 transition"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                    <span className="hidden sm:inline text-[10px] text-gray-400">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
{project.links && (
  <div className="mt-3">
    <p className="text-gray-400 font-medium mb-2">Links</p>
    <div className="flex  flex-wrap gap-3">
      {project.links.map((link, j) => (
        <a
          key={j}
          href={link.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#A855F7] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] text-sm transition flex items-center gap-1"
        >
          {link.icon && (
            <img
              src={link.icon}
              alt={link.name}
              className="w-4 h-4 object-contain" // small and inline with text
            />
          )}
          {link.name}
        </a>
      ))}
    </div>
  </div>
)}


          {/* View Details Button */}
          <div className="mt-4">
            <button
              onClick={() => openModal(project)}
              className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition "
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Disclaimer */}
    <p className="mt-6 text-gray-400 text-xs text-center">
      Disclaimer: Some projects include private repositories or limited-access demos.
    </p>
  </Container>
)};