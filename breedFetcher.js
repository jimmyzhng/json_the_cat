const request = require('request');

const fetchBreedDescription = (breedName, cb) => {

  request('https://api.thecatapi.com/v1/breeds/', (error, response, body) => {

    if (error) {
      return cb(error, null);
    }

    const data = JSON.parse(body);
    const foundCat = data.find(cat => cat.name === breedName);

    if (!foundCat) {
      return cb(`Sorry, cant find cat!`, null);
    }

    const catInfo = foundCat.description;

    return cb(null, catInfo);

  });
};

module.exports = { fetchBreedDescription };