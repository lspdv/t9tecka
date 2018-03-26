const baseUrl = process.env.API_URL || 'http://localhost:5000/api';

export const getCombinations = numbers => {
  return new Promise((resolve, reject) => {
      try {
          console.log('fetching data');
          fetch(`${baseUrl}/t9ka`, {
              method: 'POST',
              cache: 'no-cache',
              mode: 'cors',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ numbers }),
          }).then((res) => {
              console.log('returned');
              console.log(res);
              res.json().then(jsonResult => resolve(jsonResult));
          });
      } catch (error) {
          console.log('Error during fetching results.', error)
          reject(error);
      }
  })
};

export default { getCombinations };