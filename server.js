const { searchForWordsInDictionary, convertNumbersToLetters } = require("./src/utils/utils.js")

const express = require('express');
const path = require('path');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.listen(port);
console.log(`Server running on localhost: ${port}`);
app.use('/api', router);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

router.post('/t9ka', (req, res) => {
  const numbersToConvert = req.body.numbers;
  const convertedNumbers = convertNumbersToLetters(numbersToConvert);
  const matchingWords = searchForWordsInDictionary(convertedNumbers);


  res.json({ convertedNumbers, matchingWords });
  res.status(200).send('OK');
});

