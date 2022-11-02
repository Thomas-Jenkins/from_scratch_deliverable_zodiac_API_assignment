const { Router } = require('express');
const { zodiacs } = require('../zodiac-data');

module.exports = Router()

  .get('/', (req, res) => {
    const zodiacList = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    res.json(zodiacList);
  });

  

