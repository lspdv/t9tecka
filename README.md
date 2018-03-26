This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project contains T9 convertor as we all (or the older of us) know very well and compares choosen digits with words in english dictionary. Dictionary contains just limited number of words. 

For server I use express and part of the script contains the function for matching pairs of letters (which we could call similar to Cartesian Product mathematic operation). Those matches will be compared with the dictionary...hopefully...somehow....anyay, this README is TBD soon.

In the project directory, you can run:

### `yarn start-server`

Runs the express server to reach endpoint for /t9tka.<br>
Frontend part will fetch data from http://localhost:5000/api/t9tka

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Page is hot-reloading if changes.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app will be ready to be deployed!