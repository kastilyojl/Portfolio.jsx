import React, { useEffect, useState } from "react";
import Button1 from "./components/buttonAnimation";
import SimpleButton from "./components/simpleButton";
import Container from "./components/container";
import CV from "./assets/John_Lester_Castillo_LatestCV.pdf";
import profile_pic from "./assets/profile_pic.png";

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const [roleText, setRoleText] = useState("");
  const [isDeletingRole, setIsDeletingRole] = useState(false);
  const [roleLoopNum, setRoleLoopNum] = useState(0);

  const texts = [
    "Coding can be challenging. It requires a lot of planning, problem-solving, and testing, which can sometimes lead to frustration and a lack of motivation, making you question your path. However, once you achieve your goal, that frustration transforms into a sense of satisfaction, pushing you to want to accomplish even more.",
  ];

  const roles = [
    "I'm a Web Developer!...",
    "😁",
    "I'm from Laguna.",
    "🎮",
    "I love building things.",
    "💻",
  ];

  const typingSpeed = 50;
  const erasingSpeed = 30;
  const pauseBetween = 2000;

  const roleTypingSpeed = 30;
  const roleErasingSpeed = 20;
  const rolePauseBetween = 2000;

  useEffect(() => {
    let timer;
    const currentText = texts[loopNum % texts.length];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));

        if (displayedText === currentText) {
          timer = setTimeout(() => setIsDeleting(true), pauseBetween);
        } else {
          timer = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          timer = setTimeout(handleTyping, 500);
        } else {
          timer = setTimeout(handleTyping, erasingSpeed);
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum]);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleLoopNum % roles.length];

    const handleRoleTyping = () => {
      if (!isDeletingRole) {
        setRoleText(currentRole.substring(0, roleText.length + 1));

        if (roleText === currentRole) {
          timer = setTimeout(() => setIsDeletingRole(true), rolePauseBetween);
        } else {
          timer = setTimeout(handleRoleTyping, roleTypingSpeed);
        }
      } else {
        setRoleText(currentRole.substring(0, roleText.length - 1));

        if (roleText === "") {
          setIsDeletingRole(false);
          setRoleLoopNum(roleLoopNum + 1);
          timer = setTimeout(handleRoleTyping, 300);
        } else {
          timer = setTimeout(handleRoleTyping, roleErasingSpeed);
        }
      }
    };

    // Start immediately without waiting for other effect
    handleRoleTyping();

    return () => clearTimeout(timer);
  }, [roleText, isDeletingRole, roleLoopNum]);

  return (
    <div className="grid grid-cols-1 gap-10">
      <Container className="transition duration-300 hover:border-white">
        <div className="flex items-start gap-4">
          <img
            alt=""
            src={profile_pic}
            className="size-20 rounded object-cover"
          />

          <div>
            <h3 className="font-medium text-white sm:text-lg">
              John Lester Castillo
            </h3>

            <p className="mt-0.5 text-gray-700 h-6">
              {roleText}
              <span className="typing-cursor text-[#9229A8]">|</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 p-6">
          <a
            href="https://www.facebook.com/johnlester.castillo.1"
            target="_blank"
          >
            <Button1
              title={"Facebook"}
              icon={
                <path d="M279.14 288l14.22-92.66h-88.91V136.89c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.16 0 259.36 0c-73.22 0-121.36 44.38-121.36 124.72v70.62H89.09V288h48.91v224h100.17V288z" />
              }
            />
          </a>
          <a
            href="https://www.linkedin.com/in/john-lester-castillo-828890327/"
            target="_blank"
          >
            <Button1
              title={"LinkedIn"}
              icon={
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.1 107.3 0 83.2 0 53.6 0 24 24.1 0 53.84 0c29.74 0 53.84 24 53.84 53.6 0 29.6-24.1 53.7-53.84 53.7zM447.9 448h-92.4V302.4c0-34.7-.7-79.2-48.24-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5 42.6-48.2 87.7-48.2 93.8 0 111.1 61.8 111.1 142.3V448z" />
              }
            />
          </a>
          <a href="https://t.me/Kast1ly0" target="_blank">
            <Button1
              title={"Telegram"}
              icon={
                <path d="M248,8C111,8,0,119,0,256s111,248,248,248,248-111,248-248S385,8,248,8ZM373.4,169.2,317.7,395.7c-4.4,17.6-16,21.9-32.4,13.7l-89.6-66.1-43.2,41.5c-4.8,4.8-8.8,8.8-18,8.8l6.4-90.4L320,184.8c7.2-6.4-1.6-9.6-11.2-3.2L141.5,297.4,54.8,271c-17.6-5.6-18-17.6,3.6-26L358,141.4C372.6,136,384.6,144.4,373.4,169.2Z" />
              }
            />
          </a>
          <a href="mailto:castillojlb0922@gmail.com" target="_blank">
            <Button1
              title={"Email"}
              icon={
                <path d="M502.3 190.8L327.4 338.1 502.3 485.4c6.2-6.3 9.7-14.6 9.7-23.5V214.3c0-8.9-3.5-17.2-9.7-23.5zm-35.8-35.9c-8.6-6.9-19.7-10.9-31.3-10.9H76.8c-11.6 0-22.7 4-31.3 10.9L256 340.1 466.5 154.9zM9.7 190.8C3.5 197.1 0 205.4 0 214.3v247.6c0 8.9 3.5 17.2 9.7 23.5l174.9-147.3L9.7 190.8zM317.1 362.6L268.6 402c-7.2 6.1-17.9 6.1-25.1 0l-48.5-39.4L9.7 497.5c8.6 6.9 19.7 10.9 31.3 10.9h429.9c11.6 0 22.7-4 31.3-10.9L317.1 362.6z" />
              }
            />
          </a>
        </div>
        <div className="flex gap-4">
          <a href={CV} target="_blank" className="w-full">
            <SimpleButton
              children={"Download CV"}
              className={"bg-white text-black"}
            />
          </a>
          <a
            href="https://github.com/kastilyojl"
            target="_blank"
            className="w-full"
          >
            <SimpleButton
              children={"Github"}
              className={"text-white border border-white"}
            />
          </a>
        </div>
      </Container>

      <div className="px-4 min-h-[200px]">
        <p className="text-gray-400 text-md">
          {displayedText}
          <span className="typing-cursor text-[#9229A8]">|</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
