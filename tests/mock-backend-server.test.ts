import { describe, it, expect } from 'vitest';
// supertest makes it easy to write tests that check if your server’s 
// endpoints work as expected without you needing to manually start 
// the server or use external tools like Postman or curl.
import request from 'supertest';

// Import the Express app (update this import if the export changes)
import app from '../mock-backend/server.js';

describe('Mock Backend Server', () => {
  it('should start the server and respond to /api/health', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('should parse JSON and enable CORS', async () => {
    // Test CORS headers
    const res = await request(app)
      .options('/api/health')
      .set('Origin', 'http://example.com');
    expect(res.headers['access-control-allow-origin']).toBe('*');

    // Test JSON middleware (add a dummy POST endpoint temporarily if needed)
    // Example: Uncomment below if you add app.post('/api/echo', (req, res) => res.json(req.body)) to server.js
    // const postRes = await request(app).post('/api/echo').send({foo: 'bar'});
    // expect(postRes.body).toEqual({foo: 'bar'});
  });

  /* --------- Not necessary but placed here for studying ---
  it('should listen on port 4242 (integration test)', async () => {
    // This is best as a manual test, but you can ensure the app starts without crashing.
    // For automated testing, it's better to export the app (not app.listen()) from server.js
    expect(app).toBeDefined();
  });
  --------------------------------------------------------------*/
});
