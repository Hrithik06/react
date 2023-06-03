## JSX

JSX is a extension for JS which allows us to write HTML-like code in JS file. It makes it easier to create HTML elements in React. JSX produces React elements. JSX comes with all the capabilites of JS. JSX is not mandatory to create React apps, but it makes the code more readable and developer friendly.

## React.createElement vs JSX

JSX is just a syntactical sugar-coating on React.createElement. The JSX code is converted to React.createElement. JSX is easy as it has HTML-like syntax and makes the code more readable. As the complexity of code grows writing code in React.createElement becomes cumbersome.

## Benefits of JSX

JSX is more concise and readable.
DOM manipulation with JSX is easier than JSX.
Writing complex HTML structure is easier in JSX as it has HTML-like syntax when compared to React.createElement.
Error detection and handling becomes intuitive.

## Behind the Scenes of JSX

  Behind the Scenes JSX is converted to React.createElement. Transpilers like Babel are used to transpile code from JSX to React "elements".

  For Example: A JSX code

  ```jsx
  const heading = (
<h1 id="heading" className="my-heading">
  {" "}
  Welcome to React👩‍🚀
</h1>
  );
  ```

  is transpiled to

  ```jsx
  const heading = React.createElement(
"h1",
{
  id: "heading",
  className: "my-heading",
},
"Welcome to React👩‍🚀"
  );
  ```

  which is rendered by ReactDOM as

  ```html
  <h1 id="heading" class="my-heading">Welcome to React👩‍🚀</h1>
  ```

## Babel & parcel role in JSX

- Babel: Bable is a javascript complier, which is used to convert JSX to React elements. Babel also has the ability to transpile ECMAScript 2015+ (ES6+) code to older versions of JS which is understood by some older browsers which do not support latest ECMAScript 2015+ (ES6+).
- Parcel: Parcel is a web-app bundler. It is a zero-config tool which makes it easy-to-use. Parcel is fast and efficient. Parcel provides a developer environment for developing web-apps. It has several feature like Hot Reloading, Caching, Minification, Diagnostics, Differential Bundling, Tree shaking etc.

## Components

Components are building-blocks in react apps. They are used to write reusable and maintainable code. Components are written to follow [Single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle), one component do only one thing, so that components can be reused. There are two types of Components - Class based Components: which is no longer preferred. - Functional Components: It is just a normal JS function which returns some piece of JSX elements.

## Functional Components

Functional Components are just JS functions which return JSX elements. They take props as input also components without props also exist. These components can be reused. Functional components cn be defined using function keyboard and arrow functions.

For Example:

  ```jsx
  const Greeting = (props) => {
<h1>Hello,{props.name} Welcome. This code is in React</h1>;
  };
  ```

  ```jsx
  function Greeting(props) {
return(
<h1>Hello,{props.name} Welcome. This code is in React</h1>;
)
  }
  ```

  Example for Functional Component without any props:

  ```jsx
  const Heading = () => {
<h1>Hello, Welcome. This code is in React</h1>;
  };
  ```

## Composing Components
  Component Composition is a technique in react where a bew component is created using exisiting components. For Example:
  ```jsx
  const Title = () => <h2>Title Element</h2>;
  const Heading = () => (
<>
  <h1 className="heading" tabIndex="5">
Hello React from JSX
  </h1>
  <Title />
</>
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Heading />);
  ```

## Assignment

## What is JSX?

JSX is a extension for JS which allows us to write HTML-like code in JS file. It makes it easier to create HTML elements in React. JSX produces React elements. JSX comes with all the capabilites of JS. JSX is not mandatory to create React apps, but it makes the code more readable and developer friendly.

## Superpowers of JSX

- HTML-like syntax.
- Ability to write JS inside HTML elements.
- Creating Comoponents.
- Data Santization - Prevents Cross-site scripting (XSS) attacks.


## Role of type attribute in script tag? What options can I use there?

`type` attribute in script tag indicates the type of script. Script tag can have four types:

- Classic JS: If the attribute is not set or empty string then it is interprted as classic JS.
- JS module: If `type="module"` then it is interpreted as JS module. A module is a self-contained, organised JS code which are imported and can be reused by other modules too.
- Import Map: If `type="importmap"` indicates that body of elements contains an import map. Import maps is a JSON object.
- Data Block: Any other value is considered as a data block and is not processed by the browser.
<br>
<br>

## {TitleComponent} vs {&lt;TitleComponent/&gt;} vs {&lt;TitleComponent&gt;&lt;/TitleComponent&gt;} in JSX 
{TitleComponent} : Does not render anything. It is a reference to the component function. - {&lt;TitleComponent/&gt;} : It is a self-closing tag and renders the component with no children. - {&lt;TitleComponent&gt;&lt;/TitleComponent&gt;} : Is an opening and closing tag that renders the component with an empty children array.
 
  | Expression | Equivalent |
  |-------------------------------------|-----------------------------------------------|
  | {TitleComponent} | Does not render anything. |
  | {&lt;TitleComponent/&gt;} | React.createElement(TitleComponent, null) |
  | {&lt;TitleComponent&gt;&lt;/TitleComponent&gt;} | React.createElement(TitleComponent, null, []) |
