import React, { useEffect, useState } from "react";
import Home from "./home";
import Project from "./Project";
import TechStack from "./TechStack";
import Container from "./components/container";

function App() {
  const [showScreenshots, setShowScreenshots] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  const openScreenshots = (project) => {
    setCurrentProject(project);
    setCurrentIndex(0);
    setShowScreenshots(true);
  };

  const nextImage = () => {
    if (!currentProject) return;
    setCurrentIndex((prev) =>
      prev === (currentProject.screenshots?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!currentProject) return;
    setCurrentIndex((prev) =>
      prev === 0
        ? (currentProject.screenshots?.length || 1) - 1
        : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black lg:pr-20 lg:pt-20 lg:pl-20">
      <div
        data-aos="fade-right"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <div className="left p-2 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
          <div className="h-full">
            <Home />
          </div>
        </div>

        <div className="right p-2 flex flex-col gap-4 overflow-y-auto">
          <Container className="transition duration-300 hover:border-white">
            <h3 className="font-medium text-[#9229A8] sm:text-lg">About Me</h3>
            <p className="mt-0.5 text-gray-400">
              Hello! I'm John Lester B. Castillo, a passionate software
              developer with experience in both front-end and back-end
              development. I enjoy creating interactive and user-friendly web
              applications. From designing responsive interfaces to building
              robust APIs, I’m always eager to learn new technologies and
              continuously sharpen my skills. I’m especially excited about
              developing projects that solve real-world problems and contribute
              to meaningful, impactful solutions.
            </p>
          </Container>
          <TechStack />
          <Project setShowScreenshots={setShowScreenshots} setCurrentProject={setCurrentProject} />
        </div>
      </div>

      {/* Modal */}
      {showScreenshots && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Container className="relative bg-black p-6 rounded shadow-lg w-[90%] max-w-3xl">
            <button
              onClick={() => setShowScreenshots(false)}
              className="absolute top-2 right-2 text-white font-bold cursor-pointer"
            >
              X
            </button>

            <h3 className="text-lg font-bold mb-4 text-white">{currentProject.title}</h3>

            {/* Carousel */}
            <div className="relative">
              <img
                src={
                  currentProject.screenshots
                    ? currentProject.screenshots[currentIndex]
                    : currentProject.image
                }
                alt={`${currentProject.title} screenshot`}
                className="w-full max-h-96 object-contain rounded mx-auto"
              />

              {currentProject.screenshots && currentProject.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-black p-1 rounded cursor-pointer"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white text-black p-1 rounded cursor-pointer"
                  >
                    &#8594;
                  </button>
                </>
              )}
            </div>

            <p className="mt-2 text-gray-300">{currentProject.description}</p>

             {/* Google Drive Link */}
            {currentProject.driveLink && (
              <a
                href={currentProject.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 underline"
              >
                View All Screenshots
              </a>
            )}
          </Container>
        </div>
      )}
    </div>
  );
}

export default App;
