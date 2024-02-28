import { useState } from "react";

function App() {
  // let state = {
  //   count: 0,
  // };
  // we can create like this
  // useState is right way
  const [count, setCount] = useState(0);

  // function onclickhandler() {
  //   setCount(count + 1); 
  // }
  return (
    <>
      {/* <button onClick={onclickhandler}>counter {count}</button> */}
   <CustomButton count={count} setCount={setCount} ></CustomButton>
   
    </>
  );
}

function CustomButton(props){
  function onclickhandler() {
    props.setCount(props.count + 1); 
  }
  return <button onClick={onclickhandler}>
    counter {props.count}  
  </button>
}
export default App;
