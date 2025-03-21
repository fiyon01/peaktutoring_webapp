// api/index.js
const serverless = require('serverless-http');
const app = require('../app'); // Import your Express app

// Serverless handler for Vercel
module.exports.handler = serverless(app);

// Local development server
if (process.env.NODE_ENV === 'development') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Local server: http://localhost:${PORT}`);
  });
}