import React, { useEffect, useState } from "react";
import Home from "./home";
import Project from "./Project";
import TechStack from "./TechStack";
import Container from "./components/container";
import SideNav from "./components/sideNav";
import Spline from "@splinetool/react-spline";
import ProjectModal from "./components/ProjectModal";
import Contacts from "./components/Contacts";

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

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (project) => {
  setCurrentProject(project);
  setCurrentIndex(0);
  setModalOpen(true);
};



  // useEffect(() => {
  //     alert("🚧 This portfolio is still under development!");
  //   }, []);

  return (
    <div className="min-h-screen pt-10 bg-black lg:pr-20 lg:pt-20 lg:pl-20 relative">
        <div
          data-aos="fade-right"
          className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-4 relative"
        >

          <div className="left p-2 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] relative overflow-hidden">
            <section id="header">
                <Home />
              </section>
               <section className="hidden md:block">
                  <Contacts/>
              </section>
              <section id="sidebar-nav">
                <SideNav className="lg:block bot-0 py-10 px-6 bottom-0" />
              </section>
              <section 
                id="robot"
                className="block -mt-26 md:-mt-10 lg:mt-0 lg:absolute lg:bottom-0 left-0 w-full h-[55vh] flex flex-col items-center">
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
              <section className="block md:hidden">
                <Contacts/>
              </section>
          </div>

          <div className="right p-2 flex flex-col gap-4 overflow-y-hidden">
            <section id="about">
              <Container className="transition duration-300 hover:border-white">
                <h3 className="font-medium text-[#9229A8] uppercase">About Me</h3>
                <ul className="mt-2 text-gray-400 list-disc list-inside space-y-1">
                  <li className="hover:marker:text-purple-500">Full-stack web development with <span className="font-semibold text-white">Laravel, React, and MySQL</span></li>
                  <li className="hover:marker:text-purple-500">Windows desktop apps using <span className="font-semibold text-white">.NET Windows Forms</span></li>
                  <li className="hover:marker:text-purple-500">Building <span className="font-semibold text-white">responsive, interactive user interfaces</span></li>
                  </ul>
              </Container>
            </section>
            <section id="technologies">
              <TechStack />
            </section>
            <section id="projects">
              <Project openModal={openModal} />

            </section>
          </div>
        </div>

        {modalOpen && currentProject && (
  <ProjectModal
    project={currentProject}
    onClose={() => setModalOpen(false)}
  />
)}

  
    </div>

    
  );
}

export default App;
