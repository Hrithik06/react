## What is `NPM`?

NPM is a pacakge manager for JS. According to official website `NPM` is not acronym for 'Node Package Manager'. It is a standard repo for packages, utiites,libraries. It is also the default package manager for JS runtime envirnment Node.js. `npm install <package_name>` or `npm i <pacakge_name>` command is used to install packages.

## What is `Parcel/Webpack`? Why do we need it?

`Parcel/Webpack` are bundlers that bundle the JS code. Bundlers help in improving the performance of our web apps. Bundlers achieve this by several techniques like minifying the code, compressing the files, image optimisation, caching, hot reloading etc.

## What is `.parcel-cache`

`.parcel-cahce` is a folder created when the project is built with Parcel. It is a temporary folder which caches all the information about the project so that when the project is rebuilt it does not need to re-parse everything from scratch. This is one of the key reasons why react apps are fast as it avoids re-processing files which have not been changed.

## What is `npx`?

`npx` is a command-line tool use to execute pacakges. For eg: `npx parcel index.html` is used to run parcel bundler on HTML file index.html.

## What is difference between `dependencies` vs `devDependencies`

`dependencies` and `devDependencies` are fields in pacakge.json file. dependeinces are the pacakges that required for the application to run in production. devDependencies are the pacakges that are only required during devlopment.
dependeinces are installed using command `npm install <package-name>` whereas for devDependencies are installed with -D flag `npm install -D <package-name>` .
Example : react is required in production whereas parcel is just required in development.

| Feature  | Dependencies | devDependencies |
| ------------------------------------ | ------------ | --------------- |
| Required for production  | Yes  | No  |
| Required for development and testing | No   | Yes |
| Installed by default | Yes  | No  |
| Installed with npm install   | Yes  | With -D flag|

## What is Tree Shaking?

Bundlers use Tree Shaking technique to remove unused code. The bundlers analyse the code and determine which parts are not used and remove them. If there are 100s of functions in code and the app is using only few then the others are removed. Tree shaking improves the performance of apps as the size of the bundle is significanlty reduced. [Parcel supports tree-shaking](https://parceljs.org/).

## What is Hot Module Replacement?

Hot Module Replacement (HMR) is a feature which allows us to update JS code in the browser without having to reload the page while the app is running. [Parcel supports HMR](https://parceljs.org/).

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

- Error Handling
- Image Optimisation
- Tree Shaking
- Differential Bundling
- Caching

Error Handling : When there is any error in the code the user is not able to see it, errors are visible in console. Parcel shows this errors to the user and also displays possible solutions for the same.

Image Optimisation : For a browserloading an image is an expensive operation, parcel optimises the images for production.

Tree Shaking : Parcel removes unused code and enhances the performance of the app.

## What is `.gitignore`? What should we add and not add into it?

`.gitignore` is the file which tells Git which files, folders to ignore in a project. Th files and folders which can be generated in the servr should be added in the .gitngore file and files which cannot be generated in the server should not be added. Files like package.json, package-lock.json, JS files, HTML, CSS files cannot be generated so this are not included in .gitignore. Folders like .parcel-cache, dist, node_modules can be generated in the server are added in the .gitignore file.

## What is the difference between `package.json` and `package-lock.json `

`package.json` is used to install pacakges, it contains information such as dependenncies, scripts, author etc. `package-lock.json` comprehensive list of all the dependencies, transitive dependices and meta-data related to app. `pacakge.json` may contain a range of versions of dependeinces that are allowed using `^ (caret)` and `~ (tilde)` , whereas `package-lock.json` contains the exact version of the dependency installed in the project.

## Why should I not modify `package- lock.json`?

`pacakge-lock.json` is the file used by Node.js to ensure that the same versions of the dependencies are used when the project is installed on other machines. Changing it can create conflict between versions of the same dependency. If we change `pacakge.json` npm automatically regnerates `package-lock.json`.

## What is `node_modules` ? Is it a good idea to push that on git?

`node_modules` is a folder which contains all the dependencies which are installed for the app, as the `package.json` and `package-lock.json`file contains all the details regarding the required dependecies which can be used to generate these dependencies on the server, there is no need to push `node_modules` to git. Also `node_modules` is very large in size (_Search node_modules memes_) and takes up a lot of disk space.

## What is the `dist` folder?

`dist` is a folder which contains the output of the build process when we build the app using parcel and is created by Parcel. It may contain minifed files images, assets, CSS etc. which are needed for deploying the app in production server.

## What is `browserlists`

`browserslist` is a tool used to set target browsers when building a web app. One needs to specify the list of browsers that you want your app to work on.

 For Example:

last 2 versions: the last 2 versions for each browser.

last 2 Chrome versions: the last 2 versions of Chrome browser.

Firefox > 20: versions of Firefox newer than 20.

- Read about dif bundlers: vite, webpack, parcel

- Read about: ^ - caret and ~ - tilde

- Read about Script types in html (MDN Docs)
