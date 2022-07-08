# BP Pokemon

This project is running in [this page](https://lustrous-squirrel-2ca9af.netlify.app/)

This project is supported with [Netlify](https://netlify.com).

## Deployment

The project is configured to support [Github Actions](https://github.com/features/actions) with an automated pipeline.

In order to get a successfully deploy the next steps are executed:

- Install the dependencies
- Pass the linter
- Pass the unit tests
- Build the project
- Deploy to Netlify

## Ways of working

The practices applied in this project are the following:

- TDD (unit tests and integration tests)
- Clean Code
- Continuous Integration
- Continuous Deployment
- Atomic Design
- State management with Redux
- Trunk Based Development
- Prop types to improve js

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies to execute the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
