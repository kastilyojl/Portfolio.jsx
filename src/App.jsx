import React from "react";
import Home from "./home";
import Project from "./Project";
import TechStack from "./TechStack";
import Container from "./components/container";

function App() {
  return (
    <div className="min-h-screen bg-black lg:pr-20 lg:pt-20 lg:pl-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="left p-2 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
          <div className="h-full">
            <Home />
          </div>
        </div>

        <div className="right p-2 flex flex-col gap-4 overflow-y-auto">
          <Container>
            <h3 className="font-medium text-white sm:text-lg">About Me</h3>
            <p className="mt-0.5 text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              possimus dicta, facilis voluptatibus, dolorum cumque quae vero sed
              alias quis rerum voluptatem quasi fuga beatae ab delectus
              perferendis fugit autem. Molestias facilis deserunt at iusto,
              totam ducimus doloribus maiores cumque! Nemo tempora voluptate
              velit praesentium distinctio nisi doloremque alias, similique
              accusantium quia vero sequi pariatur ratione cupiditate rem, porro
              dolor. Numquam blanditiis veritatis perferendis dicta possimus
              consequatur sunt fugit, doloribus porro ipsam nostrum nemo
              reiciendis odio error aut impedit veniam! Perspiciatis reiciendis
              tenetur illum iure? Fugiat obcaecati nemo ullam architecto? Ipsa
              corporis aliquid eligendi assumenda illo nesciunt delectus nam,
              ullam soluta minus numquam voluptatem earum dolorem nemo quis! Sit
              repellendus tempore autem deleniti assumenda sapiente blanditiis
              placeat voluptates, illo voluptatum.
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
