# AI Lab Website

This is the code of the React Frontend of the HFF AI Lab's website ([https://kilab.hff-muc.de/](https://kilab.hff-muc.de/)). It works together with a Strapi CMS that runs on the same network and is only accessible locally.
The proxying of requests to the CMS (/uploads and /graphql) is handled with NGINX on the host computer.

# Setup

For automatic linting and codestyle application, add this to settings.json in VS Code and install ESLint and Prettier VSCode Extension:

    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "eslint.alwaysShowStatus": true,
    "eslint.codeActionsOnSave.rules": null,
    "files.autoSave": "onFocusChange"

## Available Scripts

### `npm install`

installs all dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
