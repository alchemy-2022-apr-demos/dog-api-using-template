const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /dogs should return a list of dogs', async () => {
    const resp = await request(app).get('/dogs');
    expect(resp.body.length).toEqual(4);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });
  it('GET /dogs/:id should return the dog detail', async () => {
    const resp = await request(app).get('/dogs/1');
    expect(resp.body).toEqual({
      id: '1',
      name: 'Benny',
      age: 7,
    });
  });
  afterAll(() => {
    pool.end();
  });
});
