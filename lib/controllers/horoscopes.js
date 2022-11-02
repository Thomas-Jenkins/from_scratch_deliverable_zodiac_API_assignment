const { Router } = require('express');
const { horoscopes } = require('../horoscopes-data');

module.exports = Router()

  .get('/:sign', (req, res) => {
    const horoscopeBySign = horoscopes.map((horoscope) => {
      if(horoscope.sign === req.params.sign) {
        return horoscope;
      }
    });
    res.json(horoscopeBySign[0]);
  });
