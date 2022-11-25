const request = require('request');
const catName = process.argv[2];

request('https://api.thecat', (error, response, body) => {

  if (error) {
    console.log(`Sorry, request failed! We encountered the following error: ${error}`);

    if (response) {
      console.log('statusCode:', response && response.statusCode);
    }

  }

  if (!error) {

    // We need to use deserialization (convert string to object)
    const data = JSON.parse(body);

    // It is an array of objects, and each object has a key-value pair describing the name of the cat
    // name : 'cat'

    const foundCat = data.find(cat => cat.name === catName);

    if (!foundCat) {
      return console.log(`Sorry, cannot find cat!`);
    }

    console.log(foundCat.description);
  }
});