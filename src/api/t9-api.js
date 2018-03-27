const AbortController = window.AbortController;
const controller = new AbortController();
const signal = controller.signal;

export const getCombinations = numbers => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`/api/t9ka`, {
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numbers }),
        signal
      }).then(res => {
        console.log(res);
        res.json().then(jsonResult => resolve(jsonResult));
      });
    } catch (error) {
      console.log('Error during fetching results.', error);
      reject(error);
    }
  });
};

export const abortFetching = () => {
    try {
      console.log('Now aborting your request');
      controller.abort()
    } catch (error) {
      console.log('Error during aborting your request.', error);
    }
};