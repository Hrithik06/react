import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "I am h1 tag"
);

//JSX
const jsxHeading = (
  <h1 id="heading" tabIndex="1">
    Namaste React using JSX{" "}
  </h1>
);
//Functional Component

const Title = () => (
  <h1>I'm A Title Component</h1>
)
const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h1>I'm React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

// JSX(transpiled before it reaches the JS engine)- PARCEL-Babel

//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
