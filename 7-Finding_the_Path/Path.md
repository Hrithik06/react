### What are various ways to add images into our App? Explain with code examples
### What would happen if we do console.log(useState())?
An array will logged in the console, containing two elements. First element being state variable, second element is a function.
### How will useEffect behave if we don't add a dependency array ?
By default useEffect is called on every re###render of the component.
### What is SPA?
In React, Routes are used to update/replace the components in a page, as the code for each component is already present there is no network call being made so the entire page is not reloading.
### What is difference between Client Side Routing and Server Side Routing?
Server Side Routing: In server side routing each page is fetched by a network call using anchor tags. This makes the entire app to be reloaded and makes the experience feel slow.

Client Side Routing: There is no network call being made, as all the Component code is already present and Components are just updated or replaced. Thus making React apps faster and SPA.