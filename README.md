This project was bootstrapped with ejected [Create React App](https://github.com/facebookincubator/create-react-app).

Project is T9 convertor - the ugly annoying phone kayboards feature we all (or the older of us) know very well. It compares choosen digits (converted to letters) with words in english dictionary. Dictionary contains just limited number of words. 

Express server creates endpoint and endpoint offers results returned by functions for:
1. converting digits to letters
2. comparing converted results with dictionary (based on Cartesian Product mathematic operation).

In the project directory, you can run:

### `yarn start-dev`

Runs scripts needed for running frontend and API endpoint on one port.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn start`

Contains scripts for frontend and backend. For deployment I am using Now.sh and it defaultly uses `yarn start`<br>
I recommend not using this command for development mode.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app will be ready to be deployed!


## Deployement

Demo of this app is deployed and can be re-deployed by Now.sh very easily.
In command line install `yarn now`
and use `now` command.
Or by drag&drop in Now desktop app.
