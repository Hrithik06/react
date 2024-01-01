## What is a Microservice?
In a WebApp we have several services like frontend, backend, sms notification, db connection, authentication.. In a Microservice Architecture all these services are separated and handled by different teams, these microservices can be built in any tech stack for example, frontend in ReactJS, backend in Java, sms notifier in Golang... All these services combine to form one big WebApp. This is called Seperation of Concerns and follows Single Responsibility Principle, each service has a specific task which is not interfered by others. Each service runs on a different port, and make api calls to contact each other and pass data.

## What is Monolith architecture?
Earlier WebApps were built in monolith. As the name suggests a large project containing api, ui,db connection, authentication, sms notification... everything inside a single project. If there is a small change to be made like changing color of abutton entire project has to bre compiled and deployed. All developers are working on the same project, same repository. 

## What is the difference between Monolith and Microservice?
In monolith there is a single project/repo containing all the code of diffrent services and has to be written in a single tech stack like Java, JSP, Springboot. Monolith if there is a change to be made entire project has to be compiled and deployed.
Im microservice each service is a different project in itself with various tech stacks. Microservice follows Single Responsibilty Principle, each service has a single responsibility and not interefered by others. They communicate with each other through APIs.

## Why do we need a useEffect Hook?
useEffect Hook is used when we want to do any operation after the Component is rendered. useEffect takes a callback function and a dependency array. This callback function is called when the Component is rendere. One usecase is when the data has to be fetched from the API after the Body Component loads.

## What is Optional Chaining?

Optional chaining allows you to access properties of an object without the need to validate each level of the nested structure to check for existence. It helps to prevent errors that would occur if trying to access properties of an object that might be null or undefined.

The optional chaining operator is represented by the question mark ? placed before the dot . in the property access.

## What is Shimmer UI?
When the user loads a webapp the data is being fetched from server to client/browser. And there is a time when the UI will not have any data to display, at this time the webapp will be blank, even though the body has loaded. Once the data is fetched and UI is loaded it comes as a surprise to the end-user. This can be solved with conditional rendering where Shimmer UI is used, Shimmer UI is a skeleton of the upcoming UI which the user sees. This helps the user to anticiapte what kind of UI they will be dealing with rather than shocking them with sudden appearance of the UI. 

## What is the difference between JS expression and JS statement
A JS expression is cade which produces a value. A JS statement is a large unit of code which does not produce value by itslef but consists of several expressions. Example:
```jsx
//Expression
const sum = 10 + 5; // Addition expression

//Statements - If..else, for loops, while, do-while
for (let i = 0; i < 5; i++) {
  // Code block executed in each iteration
}
```
## What is Conditional Rendering, explain with a code example
Rendering a component based on certain condition. 
Example: Until the data is fetched from API and state variable gets populated display Shimmer UI to the user.
```jsx
  // Conditional Rendering
  if(listOfRes.length === 0){
    return <Shimmer />
  }
  
  // Ternary Operator
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
    ........
  )
```

## What is CORS?
CORS - Cross Origin Resource Sharing
Previously browsers would not allow resource sharing between websites of different domains, sub domains, different ports, portocols of the same website. As the world is moving into Microservice architecture loosely coupled apps, resource sharing becomes very important. CORS mechanism helps in this.

## What is async and await?
`async` and `await`,are the keywords used in JS when dealing with Asynchronous functions. `async` keyword is used to define a function as asynchronous. An asynchronous function returns a promise implicitly, allowing the function to use the `await` keyword within its body.

## What is the use of `const json = await data.json();` in getRestaurants()
The `.json()` method is used to extract the JSON body content from a response object obtained from a network request using the Fetch API or other similar mechanisms.