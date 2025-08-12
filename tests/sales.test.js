const request = require('supertest');
const app = require('../app');

describe('GET /sales', () => {
  it('returns sales route', async () => {
    const res = await request(app).get('/sales');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Sales route' });
  });
});
