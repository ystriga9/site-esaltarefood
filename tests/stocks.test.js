const request = require('supertest');
const app = require('../app');

describe('GET /stocks', () => {
  it('returns stocks route', async () => {
    const res = await request(app).get('/stocks');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Stocks route' });
  });
});
