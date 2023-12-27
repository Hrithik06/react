## Is JSX mandatory for React?
No, JSX is not mandatory for React.JSX is nothing but a syntactic sugar of React.createElement(...). JSX makes it easier to generate React elements as it enables to write HTML and Javascript together. JSX has HTML-like syntax which makes it comfortable for one who has prior knowledge of HTML. JSX is compiled to React elements. One can skip this step and directly write React elements but JSX simplifies writing React as the complexity grows writing react elements without JSX becomes a daunting task.

## Is ES6 mandatory for React?
ES6 is not mandatory for React, but it is recommended. ES6 makes code readable and conscise. Features like arrow functions, destructuring, spread syntax makes the code readable and efficient. The same tasks can be achieved without using ES6 features. However, ES6 standardizes JavaScript to make code more readable and accessible.

## {TitleComponent} vs {\<TitleComponent/>} vs {\<TitleComponent>\</TitleComponent>} in JSX
- {TitleComponent} : Does not render anything. It is a reference to the component function. 
- {\< TitleComponent/>} : It is a self-closing tag and renders the component with no children. 
- {\<TitleComponent>\</TitleComponent>} : Is an opening and closing tag that renders the component with an empty children array.
 
  | Expression | Equivalent |
  |-------------------------------------|-----------------------------------------------|
  | {TitleComponent} | Does not render anything. |
  | {\<TitleComponent/>} | React.createElement(TitleComponent, null) |
  | {\<TitleComponent>\</TitleComponent>} | React.createElement(TitleComponent, null, []) |

## How can I write comments in JSX?
In JSX, comments can be added using curly braces and the forward-slash and asterisk syntax of JavaScript. Double forward slashes can be used for a single-line comment, but they cannot be used in a JSX element; if used, they are parsed as a string.
```javascript
      {/* comment here */}
```
## What is <React.Fragment></React.Fragment> and <></>?
<></> is a short-hand for <React.Fragment></React.Fragment> and its called a React Fragment. React fragment is used when we don't want to create a new DOM node. It is useful in grouping multiple elements. When returning multiple elements from a component without wrapping in containers like \<div>.

## What is Virtual DOM?
Virtual DOM is a concept where a "virtual" representation of the "real" DOM is kept in memory. It does not have the power to actually change anything on the screen. It is light weight, and efficient which makes React apps fast. React uses virtual DOM to determine menial changes required to update the DOM efficiently.

## What is Reconciliation in React?
Reconciliation is a process by which React updates the UI in response to changes in states or props. React uses virtual DOM to perform reconciliation. The reconciliation algorithm compares the virtual DOM of the previous state with the new state; if there are differences, React will update the real DOM.

## What is React Fiber?
React Fiber is a reimplementation of React's core algorithm. It was introduced in React 16 to improve performance, responsiveness and suitability for complex apps, animations, layouts and gestures. The main goal is to enable incremental rendering, splitting rendering work into chunks, and spread it out over multiple frames.  Ability to pause, abort, or reuse work as new updates come in. Ability to assign priority to different types of updates.

## Why we need keys in React? When do we need keys in React?
Keys are essential when rendering lists. React uses keys to identify which items have changed, are added or removed. React can avoid re-rendering the entire list if only a small part of it has changed, improving performance.

## Can we use index as keys in React?
Yes, index can be used as keys, but it is not recommended to use index as keys. using index as keys can cause unpredictable behaviour when items are added or removed. Can lead to performance issues React will compare the indexes of eleemnts in array to determine change which will be a costly operation if array is large. IIf there are duplicate keys, React will not be able to distinguish between them.

## What is props in React? Ways to pass props?
`props` is short for properties in React. props are used to pass data from parent component to child component.  They are similar to function arguments in JavaScript.  Props are read-only, ensuring components act like pure functions with respect to their props. 
### Answer for Ways to pass props?

## What is a Config Driven UI ?
It is a software development approach that uses configuration files to define the user interface of an app rather than hard-coding it.  The configuration file or data structure contains information about the layout of UI, styles, properties, and behavior of elements. 

## References

- Code Link: https://bitbucket.org/namastedev/namaste-react-live/src/master/
- React without JSX: https://reactjs.org/docs/react-without-jsx.html
- Virtual DOM: https://reactjs.org/docs/faq-internals.html
- Reconciliation: https://reactjs.org/docs/reconciliation.html
- React Fiber Architecture: https://github.com/acdlite/react-fiber-architecture
- React Without ES6: https://reactjs.org/docs/react-without-es6.html
- Index Keys as Anti-Pattern: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
