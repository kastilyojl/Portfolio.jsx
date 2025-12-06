import React, { useEffect } from "react";
import Container from "./components/Container";
import CodingChallenge from "./assets/project_images/coding_challenge/HeroPage.png";
import EnrollmentV2 from "./assets/project_images/enrollment_v2/HeroPage.png";
import OCR from "./assets/project_images/enrollment_v2/OCR.png";
import RBAC from "./assets/project_images/enrollment_v2/RBAC.png";
import Dashboard from "./assets/project_images/enrollment_v2/Dashboard.png";
import AuditTrail from "./assets/project_images/enrollment_v2/AuditTrail.png";
import UserManagement from "./assets/project_images/enrollment_v2/UserManagement.png";
import PortfolioV2 from "./assets/project_images/portfolio_v2/HeroPage.png";
import ProjectPage from "./assets/project_images/portfolio_v2/ProjectPage.png";
import MobileViewHeroPage from "./assets/project_images/portfolio_v2/MobileViewHeroPage.png";
import DekstopViewProjectModal from "./assets/project_images/portfolio_v2/DesktopViewProjectModal.png";
import MobileViewProjectModal from "./assets/project_images/portfolio_v2/MobileViewProjectModal.png";
import EnrollmentV1 from "./assets/project_images/enrollment_v1/HeroPage.png";
import LoginEV1 from "./assets/project_images/enrollment_v1/Login.png";
import PaymentFormV1 from "./assets/project_images/enrollment_v1/PaymentForm.png";
import ProcedureV1 from "./assets/project_images/enrollment_v1/Procedure.png";
import RegFormV1 from "./assets/project_images/enrollment_v1/RegistrationForm.png";
import PortfolioV1 from "./assets/project_images/portfolio_v1/HeroPage.png";
import ProjectPageV1 from "./assets/project_images/portfolio_v1/ProjectPage.png";
import AboutPageV1 from "./assets/project_images/portfolio_v1/AboutPage.png";
import ContactPageV1 from "./assets/project_images/portfolio_v1/ContactPage.png";
import ExtractexText from "./assets/project_images/ocr/ExtractedText.png";
import ExtractexTextInput from "./assets/project_images/ocr/ExtractedTextInserted.png";

export default function Project({openModal}) {

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  const projects = [
    {
      title: "📌 Optical Character Recognition (OCR)",
      image: ExtractexText,
      screenshots: [
        ExtractexText,
        ExtractexTextInput,
      ],
      description:
        "Integrated into Enrollment System v2, this OCR Form Digitization module allows users to capture or upload paper registration forms, extract text using Tesseract.js, and automatically map it into structured form fields with regex-based parsing and data cleaning, reducing manual data entry and ensuring accurate digital enrollment records.",  
      links: [
        {
          name: "OCR Demo",
          icon: "https://www.freeiconspng.com/uploads/play-button-icon-png-12.png",
          url: "https://drive.google.com/file/d/13oD-UwdtulkMr95zqT_kG_2brff0b-W5/view?usp=sharing",
        },
      ],
      technologies: [
        {
          name: "Tesseract.js (OCR)",
          icon: "https://raw.githubusercontent.com/naptha/tesseract.js/master/docs/images/tesseract.png",
        },
      ],
    },
    {
      title: "Portfolio v2",
      image: PortfolioV2,
      screenshots: [
        PortfolioV2,
        ProjectPage,
        MobileViewHeroPage,
        DekstopViewProjectModal,
        MobileViewProjectModal
      ],
      description:
        "My second portfolio website, built as a static site using React.js and Tailwind CSS. It showcases my projects and skills in a modern, responsive, and interactive layout.",
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
        {
          name: "Spline (3d asset integration)",
          icon: "https://spline.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspline_logo.54f4e584.png&w=64&q=75",
        },
      ],
    },
    {
      title: "Enrollment System v2",
      image: EnrollmentV2,
      screenshots: [
        EnrollmentV2,
        OCR,
        RBAC,
        AuditTrail,
        UserManagement,
        Dashboard
      ],
      driveLink: "https://drive.google.com/drive/folders/1SRunYskfypoo1ORxM8z2fQwC1vNDciyr?usp=sharing",
      description:
        "An Enrollment System featuring OCR for scanning registration forms, XGBoost for data analysis, and Role-Based Access Control (RBAC) to manage secure access for five user roles — Super Admin, Registrar, Accounting, Professor, and Student.",
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
      image: CodingChallenge,
      description:
        "A web application featuring secure login, registration, and a homepage. The frontend interacts with the backend via RESTful APIs, with authentication and authorization handled using JSON Web Tokens (JWT).",
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
      title: "Enrollment System v1",
      image: EnrollmentV1,
      screenshots: [
        EnrollmentV1,
        LoginEV1,
        PaymentFormV1,
        ProcedureV1,
        RegFormV1
      ],
      description:
        "Proposed and developed an Enrollment System for a Software Engineering course, integrating a Decision Tree algorithm to predict student eligibility based on academic records and performance. The system helps streamline enrollment decisions and demonstrates predictive modeling in a practical application.",
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
    {
      title: "Portfolio v1",
      image: PortfolioV1,
      screenshots: [
        PortfolioV1,
        ProjectPageV1,
        AboutPageV1,
        ContactPageV1,
      ],
      description:
        "My first portfolio website, built as a static site using HTML, CSS, JavaScript, and Bootstrap. It showcases my projects, skills, and personal work in a clean and interactive layout.",
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
          className="flex flex-col gap-4 md:p-4 rounded-xl border bg-black/10 backdrop-blur-[1px] hover:bg-white/4 hover:backdrop-blur-[4px] transition duration-300"
        >
          <h4 className="text-white text-md font-medium">{project.title}</h4>
          <p className="text-gray-400">{project.description}</p>
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
                        className="w-full h-12 sm:h-16 md:h-20 object-cover rounded-lg"
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

          {/* Links */}
          {project.links && (
            <div className="mt-1">
            
              <div className="flex flex-col flex-wrap gap-3">
                {project.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#A855F7] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] text-[11px] transition flex items-center gap-1"
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


          {/* Built With */}
          {project.technologies && (
            <div className="mt-1">
   
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-1 px-2 py-1 rounded bg-[#101010] hover:bg-[#A855F7]/20 transition"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                    <span className="text-sm text-gray-400">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View Details Button */}
          <div className="mt-1">
            <button
              onClick={() => openModal(project)}
              className="w-full px-4 py-1 sm:py-2 text-sm md:text-md text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition "
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>

    <p className="mt-6 text-gray-400 text-xs text-center italic">
      Disclaimer: Some projects include private repositories or limited-access demos.
    </p>
  </Container>
)};