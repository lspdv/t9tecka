This project was bootstrapped with ejected [Create React App](https://github.com/facebookincubator/create-react-app).

DEMO: https://reklosenetagovat.now.sh/

Project is T9 convertor - the ugly annoying vintage phone keyboards feature we know very well. You can input up to 7 digits and function on backend will convert them to all possible letter combinations. After that another function compares results with words in English dictionary. Dictionary contains just limited number of words, about 10 000 and some of them are pretty strange.

What is included in thi special sale price:
1. Easteregg - hidden Github redirect.
2. The iPhone UI is pure CSS no pictures!
3. User friendly error handling! w Error Boundary (unfortunatelly handlers not included (╯°□°）╯︵ ┻━┻ )
3. My fuckups are clearly visible in commits - I dont even try to hide them.
4. Searching for words in dictionary - try put some meaningful digits like: 8378464 or 228
4. It so awesome that it is responsive - I cant believe my eyes, you can use iPhone, iPad, Big TV screen, projector - like aaaaw yeah! I dont recommend ising IE because I decided to basically not support it or TRY to test it. Chrome is the choice! God save the Chrome!

![picture](public/img_phone.png) ![picture](public/img_projector.jpg) ![picture](public/img_desktop.png)

Express server creates endpoint and endpoint offers results returned by functions for:
1. converting digits to letters
2. comparing converted results with dictionary (based on Cartesian Product mathematic operation or I hope so because I hapilly got inspired from discussions on StackOverFlow).

In the project directory, you can run (some of us rather walk):

### `yarn start-dev`

Runs scripts needed for running frontend and API endpoint on one port for development.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn start`

I use this commant during deploy. I am using Now.sh and it defaultly picks `yarn start`<br>
I recommend not using this command for development mode. Or lets say it clearly. Dont use it, it wont work!

### `yarn test`

Launch the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn build`

Builds the app to be production ready to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Deployement

Demo of this app is deployed and can be re-deployed by Now.sh very easily.
In command line install `yarn -g now` and use `now` command.
Or by drag&drop in Now.sh desktop app.
