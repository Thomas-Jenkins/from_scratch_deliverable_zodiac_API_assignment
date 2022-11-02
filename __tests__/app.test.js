const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../lib/zodiac-data');

describe('zodiac routes', () => {
  it('/zodiacs should return an array of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiacs/:id should return zodiac details', async () => {
    const res = await request(app).get('/zodiacs/1');
    const aquarius = {
      'id': '1',
      'name': 'aquarius',
      'dates': 'Jan 21 - Feb 19',
      'symbol': 'Water Bearer'
    };
    expect(res.body).toEqual(aquarius);
  });

  it('/horoscopes/:sign should return a horoscope related to the sign', async () => {
    const res = await request(app).get('/horoscopes/aquarius');
    const aquarius = {
      'id': '1',
      'sign': 'aquarius',
      'horoscope': 'Your days are likely to become darker as the world around you slowly falls into a quiet winter, avoid the color green. Lucky numbers: 5, 8, 19, 42, 90'
    };
    expect(res.body).toEqual(aquarius);
  });
});








// describe('example test - you should probably update me', () => {
//   it('home route should return hello world', async () => {
//     const resp = await request(app).get('/');
//     expect(resp.text).toEqual('hello world!');
//   });
// });
