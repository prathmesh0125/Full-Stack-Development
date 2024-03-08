import React from "react";

const App = () => {
  return (
    <div>
      <CardWrapper>
        <div>hi hello</div>
      </CardWrapper>
      <CardWrapper>
        <div>hi hello</div>
      </CardWrapper>
    </div> 
  );
};
function CardWrapper({ children }) {
  console.log(children)
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>{children}</div>
  );
}

export default App;

// import React from "react";

// const App = () => {
//   return (
//     <div>
//       <CardWrapper innerAsAPropsComponent={<TextComponent/>} />
//     </div>
//   );
// };
// function TextComponent() {
//   return <div>hi there</div>;
// }
// function CardWrapper({ innerAsAPropsComponent }) {
//   return <div style={{border:"2px solid black",padding:"20px"}}>{innerAsAPropsComponent}</div>;
// }

// export default App;
