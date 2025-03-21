const serverless = require('serverless-http');
const dotenv = require("dotenv");
dotenv.config();

const app = require('../app'); // Import Express app

module.exports = serverless(app); // Serverless handler for Vercel
