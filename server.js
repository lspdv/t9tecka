const express = require('express');
const path = require('path');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
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
  const convertedNumbers = getNumbersToWord(numbersToConvert);
  const matchingWords = searchForWords(convertedNumbers);
  console.log(matchingWords, 'dict result2')
  

  res.json({ convertedNumbers, matchingWords });
  res.status(200).send('OK');
});

// const RANDOMDICT = ['testing', 'cat', 'doggo', 'love', 'hater', 'ja', 'moon']; // 8378464, 228, 36446, 5683, 42837, 52, 6666 numbers

function searchForWords(convertedNumbers) {
  const dictionary = [];
  const file = fs.readFileSync('./dictionary.txt', 'utf8').split('\n');

  file.forEach(line => {
    convertedNumbers.forEach(digit => {  
      if (digit === line) {
        dictionary.push(line);
  console.log(dictionary, 'dict w line')
        
      }
    });
  });
  console.log(dictionary, 'dict result1')
  return dictionary;
  // console.log(convertedNumbers[0][0], 'convertedNumbers')

  // const words = convertedNumbers.filter(word => RANDOMDICT.includes(word));
  // const result = words.join(', ') || `No matches`;

  // return result
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

    //function matching set from multiple sets of arrays 
    //example: input 23  - the output should be: ad, ae, af, bd, be, bf, cd, ce, cf
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
