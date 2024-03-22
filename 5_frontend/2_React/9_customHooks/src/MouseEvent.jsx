import React, { useEffect, useState } from "react";

function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY }); // Fix: Added 'e.' prefix to 'clientY'
  };
  
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove); // Fix: Changed to removeEventListener
    };
  }, []); // Fix: Added empty dependency array to run the effect only once
  
  return position;
}

const MouseEvent = () => {
  const mousePointer = useMousePointer();
  return (
    <div>
      Your mouse position is {mousePointer.x}, {mousePointer.y}
    </div>
  );
};

export default MouseEvent;
