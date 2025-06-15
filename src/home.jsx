import React from "react";
import Button1 from "./components/buttonAnimation";
import SimpleButton from "./components/simpleButton";
import Container from "./components/container";

function home() {
  return (
    <div className="grid grid-cols-1 gap-10">
      <Container>
        <div className="flex items-start gap-4">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="size-20 rounded object-cover"
          />

          <div>
            <h3 className="font-medium text-white sm:text-lg">
              John Lester Castillo
            </h3>

            <p className="mt-0.5 text-gray-700">I'm a Web Developer</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 p-6">
          <Button1
            title={"Youtube"}
            icon={
              <path d="M549.7 124.1c-6.3-24-24.9-42.6-48.9-48.9C456.5 64 288 64 288 64s-168.5 0-212.8 11.2c-24 6.3-42.6 24.9-48.9 48.9C16 168.5 16 256 16 256s0 87.5 10.3 131.9c6.3 24 24.9 42.6 48.9 48.9C119.5 448 288 448 288 448s168.5 0 212.8-11.2c24-6.3 42.6-24.9 48.9-48.9C560 343.5 560 256 560 256s0-87.5-10.3-131.9zM232 336V176l142 80-142 80z" />
            }
          />
          <Button1
            title={"LinkedIn"}
            icon={
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.1 107.3 0 83.2 0 53.6 0 24 24.1 0 53.84 0c29.74 0 53.84 24 53.84 53.6 0 29.6-24.1 53.7-53.84 53.7zM447.9 448h-92.4V302.4c0-34.7-.7-79.2-48.24-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5 42.6-48.2 87.7-48.2 93.8 0 111.1 61.8 111.1 142.3V448z" />
            }
          />
          <Button1
            title={"Telegram"}
            icon={
              <path d="M248,8C111,8,0,119,0,256s111,248,248,248,248-111,248-248S385,8,248,8ZM373.4,169.2,317.7,395.7c-4.4,17.6-16,21.9-32.4,13.7l-89.6-66.1-43.2,41.5c-4.8,4.8-8.8,8.8-18,8.8l6.4-90.4L320,184.8c7.2-6.4-1.6-9.6-11.2-3.2L141.5,297.4,54.8,271c-17.6-5.6-18-17.6,3.6-26L358,141.4C372.6,136,384.6,144.4,373.4,169.2Z" />
            }
          />
          <Button1
            title={"Email"}
            icon={
              <path d="M502.3 190.8L327.4 338.1 502.3 485.4c6.2-6.3 9.7-14.6 9.7-23.5V214.3c0-8.9-3.5-17.2-9.7-23.5zm-35.8-35.9c-8.6-6.9-19.7-10.9-31.3-10.9H76.8c-11.6 0-22.7 4-31.3 10.9L256 340.1 466.5 154.9zM9.7 190.8C3.5 197.1 0 205.4 0 214.3v247.6c0 8.9 3.5 17.2 9.7 23.5l174.9-147.3L9.7 190.8zM317.1 362.6L268.6 402c-7.2 6.1-17.9 6.1-25.1 0l-48.5-39.4L9.7 497.5c8.6 6.9 19.7 10.9 31.3 10.9h429.9c11.6 0 22.7-4 31.3-10.9L317.1 362.6z" />
            }
          />
        </div>
        <div className="flex gap-4">
          <SimpleButton
            children={"Download CV"}
            className={"bg-white text-black"}
          />
          <SimpleButton
            children={"Github"}
            className={"text-white border border-white"}
          />
        </div>
      </Container>
    </div>
  );
}

export default home;
