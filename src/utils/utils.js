const fs = require('fs');

function convertNumbersToLetters(number) {
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

//function adding words to result based on convertedNumbers result from convertNumbersToLetters()
//example: input 6666 - would be [moon, noon]
function searchForWordsInDictionary(convertedNumbers) {
  const dictionary = [];
  const filePath = fs.readFileSync('./dictionary.txt', 'utf8').split('\n');

  filePath.forEach(line => {
    convertedNumbers[0].forEach(digit => {
      if (digit === line) {
        dictionary.push(line);
      }
    });
  });

  if (!dictionary[0]) {
    const notMatchingResult = 'No matching words.'
    dictionary.push(notMatchingResult)
  }
  return dictionary;
}

module.exports = { convertNumbersToLetters, searchForWordsInDictionary }
