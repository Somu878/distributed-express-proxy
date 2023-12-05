const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Set up proxy middleware
app.use(
  '/api',  // Change '/api' to the actual path of your API
  createProxyMiddleware({
    target: 'https://exampleapi.com',  // Replace with the base URL of your API
    changeOrigin: true,
  })
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
