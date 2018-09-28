const request = require('supertest');
const app = require('./app.js')
describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
          expect(response.res.text).toBe('Hello World!');
            expect(response.statusCode).toBe(200);
            done();
        });
    
  });
    test('It should response the POST method', (done) => {
      request(app).post('/').then((response) => {
          expect(response.statusCode).toBe(201);
          done();
      });
    
  });
  
});

describe("Test the api path", () => {   
test('It should responde post /api', (done) => {
  request(app).post('/api').then((response) => {
      expect(response.statusCode).toBe(202);

      done();
  });
});

test('It should respond GET /api', (done) => {
  request(app).get('/api').then((response) => {
    expect(response.res.text).toBe('gimme the light');
      expect(response.statusCode).toBe(200);
      done();
  });
});
});