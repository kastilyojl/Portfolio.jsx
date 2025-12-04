import React, { useEffect, useState } from "react";
import Home from "./home";
import Project from "./Project";
import TechStack from "./TechStack";
import Container from "./components/container";
import SideNav from "./components/sideNav";
import Spline from "@splinetool/react-spline";

function App() {
  const [showScreenshots, setShowScreenshots] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
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

  useEffect(() => {
      alert("🚧 This portfolio is still under development!");
    }, []);

  return (
    <div className="min-h-screen bg-black lg:pr-20 lg:pt-20 lg:pl-20 relative">
  <div
    data-aos="fade-right"
    className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-4 relative"
  >

    <div className="left p-2 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] relative overflow-hidden">
       <section id="header">
          <Home />
        </section>
        <section id="sidebar-nav">
          <SideNav className="lg:block bot-0 py-10 px-6 bottom-0" />
        </section>
        <section 
          id="robot"
          className="block -mt-20 md:-mt-10 lg:mt-0 lg:absolute lg:bottom-0 left-0 w-full h-[55vh] flex flex-col items-center">
            <Spline 
              scene="https://prod.spline.design/dGkl7hReKvdNmjX6/scene.splinecode"
              className="w-full h-full"
            />
          {/* Spline Shadow */}
          <div className="
            w-48 h-12 -mt-22 opacity-70 pointer-events-none rounded-full blur-xl
            bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.55)_0%,rgba(147,51,234,0.25)_40%,transparent_75%)]">
          </div>
        </section>
    </div>

    <div className="right p-2 flex flex-col gap-4 overflow-y-hidden">
      <section id="about">
        <Container className="transition duration-300 hover:border-white">
          <h3 className="font-medium text-[#9229A8] sm:text-lg">About Me</h3>
          <ul className="mt-2 text-gray-400 list-disc list-inside space-y-1">
            <li className="hover:marker:text-purple-500">Full-stack web development with <span className="font-semibold text-white">Laravel, React, and MySQL</span></li>
            <li className=" hover:marker:text-purple-500">Windows desktop apps using <span className="font-semibold text-white">.NET Windows Forms</span></li>
            <li className=" hover:marker:text-purple-500">Building <span className="font-semibold text-white">responsive, interactive user interfaces</span></li>
            </ul>
        </Container>
      </section>
      <section id="technologies">
        <TechStack />
      </section>
      <section id="projects">
        <Project setShowScreenshots={setShowScreenshots} setCurrentProject={setCurrentProject} />
      </section>
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

            <div onClick={toggleDetails} className="cursor-pointer">
              <span className="text-blue-400">
                {showDetails ? "Hide Details" : "Show Details"}
              </span>

              {showDetails && (
                <p className="mt-2 text-gray-300">{currentProject.description}</p>
              )}
            </div>


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
