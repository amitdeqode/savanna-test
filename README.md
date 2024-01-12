# Project run steps

1. ### `npm i`
2. ### `npm start`

# Folder Structure

We have index.tsx and App.tsx as the starting point.
Further, we have these folders in the source directory:

- components - components used in the page along with styles
- constant - constants like urls and tabs data
- hooks - hooks including data fetching hook
- mockData - demo data for moderators
- pages - main page of the app
- routes - routes for the app
- types - types for Entity and Tabs
- utils - api service and text formatting utils

# Work done

- Responsive design
- Fetched data from the mentioned api
- Added routes and error-page if a route doesn't exist
- Added variables for colors in colors.css
- Added favicons and manifest.json and also changed title
- Added service files for all api methods

## Other Available Scripts

In the project directory, you can run:

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

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
