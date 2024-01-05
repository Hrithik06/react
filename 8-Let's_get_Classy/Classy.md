### How do you create Nested Routes react-router-dom cofiguration.
```jsx
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        //colon represents resId is Dynamic
        path:"/restaurant/:resId",
        element:<ResMenu/>,
        errorElement: <Error />,
      }
    ],
    errorElement: <Error />,
  },
]);
```
### Read abt createHashRouter, createMemoryRouter from React Router docs.
createHashRouter: This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

createMemoryRouter: Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

### What is the order of life cycle method calls in Class Based Components
    constructor()
    render()
    componentDidMount()
    render()
    componentDidUpdate()
    componentWillUnmount()

### Why do we use componentDidMount?
 `componentDidMount` lifecycle method is used in class components to perform actions or execute code after the component is mounted (inserted into the DOM) for the first time like API calls are made in componentDidMount. Once the component has been mounted componentDidMount is called.

### Why do we use componentWillUnmount? Show with example
`componentWillUnmount` is a lifecycle method that is called just before the component is unmounted and destroyed. Used to perform cleanup tasks, clear timers etc.

```jsx
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      count: 0
    };
  }

  componentDidMount() {
    // Start a timer when the component mounts
    const timer = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    }, 1000);

    this.setState({ timer });
  }

  componentWillUnmount() {
    // Clear the timer when the component is about to unmount
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default Timer;
```


### (Research) Why do we use super(props) in constructor?
### (Research) Why can't we have the callback function of useEffect async?
