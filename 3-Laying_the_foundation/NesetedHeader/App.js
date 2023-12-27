import React  from "react";
import ReactDOM  from "react-dom/client";


// This is pure React Element
const header = React.createElement(
    "div",
    {className: "title"},
    [
        React.createElement("h1",{},"Hi, Welcome its Core React"),
        React.createElement("h2",{},"Hi, Welcome its Core React"),
        React.createElement("h3",{},"Hi, Welcome its Core React")
    ]
)

// This is a JSX element
const jsxHeader = <div className="title">
    <h1>Hi, Welcome its JSX</h1>
    <h2>Hi, Welcome its JSX</h2>
    <h3>Hi, Welcome its JSX</h3>
</div>
const TitleComponent = () => (<h2>Title Component</h2>)

const Composed = ()=>(
    <p> Hey, I'm a Component I'm being called from another Component. That's Component Composition for you.</p>
)
// This is Functional Component
const HeaderComponent = () => {
return(
    <>
    <div className="title">
        <h1>Hi, Welcome its Functional Component</h1>
        <h2>Hi, Welcome its Functional Component</h2>
        <h3>Hi, Welcome its Functional Component</h3>
        <Composed/>
    </div>
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header)

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(jsxHeader)

const root2 = ReactDOM.createRoot(document.getElementById("root2"))
root2.render(<HeaderComponent />)

const root3 = ReactDOM.createRoot(document.getElementById("root3"))
root3.render(TitleComponent)

const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(<TitleComponent/>)

const root5 = ReactDOM.createRoot(document.getElementById("root5"));
root5.render(<TitleComponent></TitleComponent>);