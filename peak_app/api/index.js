const serverless = require('serverless-http');
const dotenv = require("dotenv");
dotenv.config();

const app = require('../app'); // Import your Express app

module.exports = serverless(app); // Serverless handler for Vercel

// Local development server (only runs locally)
if (process.env.NODE_ENV === 'development') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Local server running at: http://localhost:${PORT}`);
    });
}
