# Indiestack

The boilerplate project for indie makers. Built with React (frontend), ChakraUI (UI), Firebase (BaaS) and Lemonsqueezy (payments).

## Quickstart

The point of this whole project is to get to market as fast as possible. This guide will get you from here to deployed web app with auth, payments, and beautiful UI in under 10 minutes.

[WIP]

## Scripts

### `npm install`

Installs the necessary packages for everything

### `npm start`

Runs the local development server with hotreload

### `npm run build`

Builds the frontend to the /build folder which is used for upload to firebase hosting

### `npm deploy`

Deploys the entire app to firebase. Run `npm run build` first for most cases. Includes the frontend build in /build, Cloud (serverside) functions in /functions, and any configuration updates made in firebase config files.

### `npm deploy:client`

Deploys only the client to firebase hosting. Run `npm run build` first for most cases. Uploads the frontend build in /build to firebase hosting

### `npm deploy:server`

Deploys only the server to firebase cloud functions. When developing locally, you must deploy your cloud functions if you aren't using the firebase emulator

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Firebase ##

### `firebase deploy`

Run this to deploy the web app, config, and edge functions
It will deployt the /build folder, so make sure to build before you run if you want to update the web app ie `npm run build`