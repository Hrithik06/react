## What is Emmet?
Emmet is a plug-in for text editors that allows users to type shortcuts which are expanded into a full piece of code.
  For Example: 
  ```html 
  div>h1
  ``` 
  will generate the code, 
  ```html
  <div><h1></h1></div>
  ```
## Difference between library and framework
Library is used to enhance th functionality of an application. A library can be included in existing project, it can also be included only for a part of application. A framework is used for building and deploying an app. It facilitates with a lot of resources. The framework controls the calling of libraries for user code, whereas in the case of a library, user code controls when and where to call the library.

## What is CDN? Why do we use it?
A CDN (Content Delivery Network) is a group of servers spread out over many locations of globe, these servers cache content to fulfill data requests to the closest end users. CDNs are used for delivering JS files of libraries like React, jQuery, Bootstrap. CDNs reduce latency and reduce the load on the website by loading content and libraries.

## Why React is know as React?
React is known as React because because it reflects the library's nature of updating the components automatically when there is change in data. It helps developers to build UIs which are fast and responsive or "reactive".

## What is cross-origin in the script tag?
The crossorigin attribute in a `<script>` tag is used to set the mode of the request for an HTTP CORS request. CORS stands for Cross-Origin Resource Sharing and is a mechanism that allows resources on a web page to be requested from another domain outside its own domain. The crossorigin attribute allows servers to specify who can access the assets on the server, among many other things.

## What is difference between React and ReactDOM
React and ReactDOM are two separate libraries. ReactDOM acts as a bridge between React components and the actual DOM elements. It is responsible for rendering components to the DOM and provides an API for DOM manipulation and a way to access the DOM nodes and elements. React, on the other hand, is a JavaScript library for building user interfaces, managing the state and components. The reason React and ReactDOM are different is due to React Native. React contains functionality utilized in web and mobile apps. ReactDOM functionality is utilized only in web apps. React Native is a separate package that provides similar functionality to React but is used for mobile app development.

## What is difference between react.development.js and react.production.js files via CDN?
The difference between the development and production builds of React is that the production build is optimized for performance and is used in the final version of the application deployed to users, while the development build is optimized for debugging and is used during the development process. Developers can choose which version to use by including the appropriate version of the React library in their applications.

## Async and Defer
 When the browser loads the webpage, it starts parsing the HTML document page.
- Under normal circumstances, when the browser encounters the scripts, it fetches the script and starts executing it once fetched. As the script is being fetched and executed, the parsing of HTML is paused and resumed once the execution of the script is completed.
- Async : When the script tag contains the "async" attribute, the HTML is loaded, and when the script is encountered, it is fetched alongside the HTML, once fetching is completed the execution of script starts and parsing of html is paused till the  execution of script completes and the html parsing is resumed.
- Defer : The "defer" attribute is in script tag the parsing of html is started by the browser and fetching of script is done parallely without any pause in the parsing of html. Once the parsing of HTML is completed and rendered, the execution of the script is carried out by the browser.
