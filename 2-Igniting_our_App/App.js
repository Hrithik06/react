/**
 * 
<div id="parent">
    <div id="child">
        <h1>I'm h1 from child</h1>
        <h2>I'm h2 from child</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 from child2</h1>
        <h2>I'm h2 from child2</h2>
    </div>
</div>
 */

// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello World from React"
// )

import React from "react";

import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "div",
    { id: "parent" },
    [
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I'm h1 from child"),
            React.createElement("h2", {}, "I'm h2 from child")
        ]),
    React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", {}, "I'm h1 from child2"),
            React.createElement("h2", {}, "I'm h2 from child2")
        ])
    ]
);






const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)


