import React, { useEffect, useState } from "react";
import Container from "./components/container";
import CV from "./assets/John_Lester_Castillo_LatestCV.pdf";
import profile_pic from "./assets/profile_pic.png";
import SocialLinkButton from "./components/socialLinkButton";

function Home() {

  return (
    <div className="grid grid-cols-1 gap-10">
      <Container className="transition duration-300">
        <div className="flex items-start gap-4">
          <img
            alt="profile picture"
            src={profile_pic}
            className="size-20 rounded object-cover"
          />
          <div>
           <h1 className="font-medium text-transparent sm:text-lg lg:text-3xl 
               bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            John Lester Castillo
          </h1>

            {/* <p className="mt-0.5 text-gray-400">
              Software Developer (Web & Desktop) <br />    
              📍Laguna, Philippines
            </p> */}
            <p className="mt-0.5 text-gray-400">Building smooth web & desktop apps with modern UI.</p>
          </div>
        </div>
       
      </Container>
    </div>
  );
}

export default Home;
