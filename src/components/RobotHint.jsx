import { useEffect, useState } from "react";

function RobotHint({className}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => !v);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${className}
        text-purple-500 text-[11px] absolute bottom-14 right-5 
        transition-opacity duration-700
        ${visible ? "opacity-100 animate-pulse" : "opacity-0"}
      `}
    >
      Drag to rotate the robot 🤖
    </div>
  );
}

export default RobotHint;
