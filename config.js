const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
  scope: process.env.SCOPE
};