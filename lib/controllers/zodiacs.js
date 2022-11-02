const { Router } = require('express');
const { zodiacs } = require('../zodiac-data');

module.exports = Router()

  .get('/', (req, res) => {
    const zodiacList = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    res.json(zodiacList);
  })

  .get('/:id', (req, res) => {
    const zodiacById = zodiacs.map((zodiac) => {
      if (zodiac.id === req.params.id) {
        return zodiac;
      }
    });
    res.json(zodiacById[0]);
  });
