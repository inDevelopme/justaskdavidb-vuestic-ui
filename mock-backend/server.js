// mock-backend/server.js

// Minimal Express backend implementation
// ---- this uses commonjs ---
// const express = require('express');
// const cors = require('cors');
// --------------------------

// ESM
import express from 'express';
import cors from 'cors';



// This creates an instance of an Express application.
// express() - sets up the core web server framework.
// app is used to define routes, middleware, and to start the server.
const app = express();

// This adds middleware to parse incoming requests with JSON payloads.
// It tells Express to automatically parse the body of any incoming request 
// where the Content-Type is "application/json"
// It then populate req.body with the parsed object.
// It is essential for handling API requests (like POST/PUT) that send data in JSON format.
app.use(express.json());

// This enables Cross-Origin Resource Sharing (CORS) for all incoming requests.
// CORS is a security feature in browsers that restricts web pages from making requests 
// to a different domain than the one that served the web page.Using cors() allows your frontend 
// (which may be running on a different port or domain in development) to make 
// requests to your mock backend without being blocked by the browser.
app.use(cors());

// Healthcheck endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Add other endpoints below this line

const PORT = 4242;
app.listen(PORT, () => {
  console.log(`Mock backend running on http://localhost:${PORT}`);
});
