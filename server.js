const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const port = process.env.SERVER_PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.listen(port);
console.log('Server runs on port ' + port);
app.use('/api', router);

router.post('/t9ka', (req, res) => {
  const numbersToConvert = req.body.numbers;
  const convertedNumbers = getNumbersToWord(numbersToConvert);
  const words = searchForWords(convertedNumbers);

  res.json(convertedNumbers);
  res.status(200).send('OK');
});

function searchForWords(convertedNumbers = []) {
  const dictionary = [];
  const file = fs.readFileSync('./dictionary.txt', 'utf8').split('\n');

  file.forEach(line => {
    convertedNumbers.forEach(digit => {
      if (digit === line) {
        dictionary.push(line);
      }
    });
  });

  return dictionary;
}

function getNumbersToWord(number) {
  const convertedNumbers = [];

  numberToLetter(number);

  function numberToLetter(digitsWord) {
    const veryOldMobileKeyboard = {
      '0': ['+'],
      '1': ['.', ',', '?', '!'],
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z']
    };

    const digits = digitsWord.split('');
    const arraysToCombine = [];

    //function match set from multiple sets of arrays
    function cartesianProduct(arr) {
      return arr.reduce(
        function(a, b) {
          return a
            .map(function(x) {
              return b.map(function(y) {
                return x.concat(y);
              });
            })
            .reduce(function(a, b) {
              return a.concat(b);
            }, []);
        },
        [[]]
      );
    }

    digits.forEach(digit => {
      arraysToCombine.push(veryOldMobileKeyboard[digit]);
    });

    const arrayOfConverted = cartesianProduct(arraysToCombine);

    return convertedNumbers.push(arrayOfConverted);
  }
  return convertedNumbers;
}
