import { useEffect, useState } from "react";

export default function Eyes() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const eyes = [
    { id: "left", offsetX: -20 },
    { id: "right", offsetX: 20 },
  ];

  return (
    <div className="flex justify-center items-center gap-8 mt-20">
      {eyes.map(({ id, offsetX }) => {
        const eyeX = mousePos.x / window.innerWidth - 0.5; // normalized -0.5 to 0.5
        const eyeY = mousePos.y / window.innerHeight - 0.5;
        return (
          <div
            key={id}
            className="w-12 h-12 bg-white rounded-full flex justify-center items-center border-2 border-gray-400"
          >
            <div
              className="w-6 h-6 bg-black rounded-full"
              style={{
                transform: `translate(${eyeX * 20}px, ${eyeY * 20}px)`,
                transition: "transform 0.05s",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
