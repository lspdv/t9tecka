export const getCombinations = numbers => {
  return new Promise((resolve, reject) => {
      fetch(`/api/t9ka`, {
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numbers }),
      })
      .then(res => {
        res.json().then(jsonResult => resolve( { status: res.status, data: jsonResult }));
      }).catch((error => {
		  console.log('Error during fetching results.', error); //TODO V2 github:@reklosenetagovat - Figure out how to convince Error Boundary to work in event handlers
      	reject(error);
	  }));
  });
};
