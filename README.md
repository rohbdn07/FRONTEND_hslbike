# Helsinki City Bike App (Frontend)

This is a Front-end part of a Full-stack project called 'Helsinki City Bike application'. \
This project contains UI sections and display travel information.
In order to see response (data) in the screen, first, you have to run its Backend repository.\
Repo for backend: https://github.com/rohbdn07/hsl-city-bike-app-BACKEND.git \
Visit backend repo for detailed information on how to run backend.

Front-end Images:

- Journey list of information

![journeylist_screenshot01](https://user-images.githubusercontent.com/57314666/184538789-2e90091c-1ffb-417e-ab23-15ff0fde021a.png)

- Station list of information

![stationlist_screenshot02](https://user-images.githubusercontent.com/57314666/184538842-a1ecccb2-63fe-419c-8976-13b447b4ec52.png)

- Station information by its ID

![stationinfoByid_screenshot03](https://user-images.githubusercontent.com/57314666/184538894-0a9f4509-88ad-4945-815a-8fa3053e52aa.png)

## Features

- Frontend built in React.js with typescript.
- Pagination.
- Filter or Search.
- View individual station information.
- Get information list according to month.
- Eslint and prettier.

## Prerequisites

To build and run this app locally you MUST need a few things:

- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)

After running backend repo, you can run this project with following steps.

## Getting Started

To get started you must follow following steps one after another:

1. Clone this repository
2. Install npm into your local VSCode by `npm install`.
3. Create `.env` file at the root of the project.
4. Put all the required env variables into .env file.

   Then, RUN this project with : `npm start` \
   Follow below for available scripts.

### 1) Git Clone

```bash
# Get the latest snapshot
git clone https://github.com/rohbdn07/hsl_citybike_FRONTEND.git

# Change into root directory
cd frontend_hslbike

```

### 2) Npm install

`npm install`

### 3 & 4) Put environment variables

Create `.env` file at the root of the project. Put below env variables.

```bash
# required env variables
REACT_APP_HOST= http://localhost:5050
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run lint:fix`

It check eslint and fixed if required, according to given configuration on `.eslintrc.json` file. \
For more information, Visit : `https://typescript-eslint.io/`

### `npm test`

No test cases are added for this project at this time of writing. \
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
