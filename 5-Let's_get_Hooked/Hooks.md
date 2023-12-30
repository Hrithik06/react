## What is the difference between Named Export, Default Export, and * as Export?

The `export` keyword enables making certain parts of the code accessible outside the module, allowing their importation and use in other programs. Functions, variables, and classes can all be exported. There exist two primary types of exports: Named Export and Default Export.

### Named Export:
When multiple exports are needed from a file, the Named Export approach is used. The syntax for Named export is as follows:

```jsx
// constants.js

export const CDN_URL = "....";

export const LOGO_URL = "....";
```
Alternatively:
```jsx
// constants.js

const CDN_URL = ".....";

const LOGO_URL = "....";

export { CDN_URL, LOGO_URL };
```

#### Importing a Named Export:
When importing Named exports, curly braces { } are utilized:
```jsx
import { CDN_URL } from "../utils/constants";
```

### Default Export:
When there is only a single export from a file, the Default Export method is employed. There can only be one default export from a file. The default keyword is used in this scenario.
```jsx
// Body.js

const Body = () => {....};
export default Body;
```

#### Importing a Default Export:
```jsx
import Body from "./components/Body";
```

`Note`: A file can contain both a default export and named imports.

### * as Export:
The * as export is utilized to perform a namespace import. This syntax allows re-exporting multiple named exports from another module as a single named export.

```jsx
// functions.js

export function add(x, y) { ... }
export function subtract(x, y) { ... }

// index.js

import * as functions from './functions.js';
export { functions };

// main.js

import { functions } from './index.js';
const result = functions.add(2, 3);
```


## What is the importance of config.js file

## What are React Hooks?
React Hooks are utility JavaScript functions provided by React, encapsulating logic behind the scenes to empower developers. They were initially introduced in React 16.8. The most commonly used Hooks include useState and useEffect. Hooks enable the handling of stateful logic and side effects in functional components, a capability previously limited to class components using lifecycle methods.

## Why do we need a useState Hook?

In React, two primary layers exist: the Data Layer and the UI Layer. The Data Layer manages data from APIs or databases and often contains logic related to data. Conversely, the UI Layer focuses on the user interface displayed to users and manages user interactions. As applications become increasingly configuration-driven and data-driven, there arises a need for synchronization between these layers. When data changes, the UI needs to reflect those changes promptly. The `useState` Hook bridges both layers, aiding in synchronizing them.

A typical useState Hook accepts initial argument and returns an array, containing variable and a function to update that variable. Variable can only be updated using this function and cannot be directly modified as it is done with normal variables. useState can take any form of argument string, array etc..
```jsx
//listOfRes is an array
  const [listOfRes, setListOfRes] = useState([]);
//       updated,  function                 (initial value an array, null, empty array)
.
.
//Updating State Variable
setListOfRes(filteredResList);
.
.
const [btnName, setBtnName] = useState("Login");
setBtnName("Logout");
```
The above code is array destructuring on the fly.
Alternatively
```jsx
const array =  useState([]);
const [listOfRes, setListOfRes] = array;
const listOfRes = array[0];
const setListOfRes = array[1];
```