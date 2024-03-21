import React from "react";

const LifecylceEvent = () => {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRender((prev) => !prev);
    }, 5000);
  });
  return <div>{render ? <Mycomponent /> : <div></div>}</div>;
};
function Mycomponent() {
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component un mounted");
    };
  }, []);
  return <div>fileld inside my component</div>;
}

export default LifecylceEvent;
