export const getCombinations = numbers => {
  return new Promise((resolve, reject) => {
      try {
          fetch(`/api/t9ka`, {
              method: 'POST',
              cache: 'no-cache',
              mode: 'cors',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ numbers }),
          }).then((res) => {
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