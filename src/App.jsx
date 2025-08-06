import React, { useEffect } from "react";
import Home from "./home";
import Project from "./Project";
import TechStack from "./TechStack";
import Container from "./components/container";

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

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
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
