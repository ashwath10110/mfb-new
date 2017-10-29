module.exports = {
  // App Settings
  //MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/cuppaOAuth',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'xxxxxxx',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || '525959953175-bpar54arh0meed3frrtk66nv0imf7jh6.apps.googleusercontent.com',
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || 'xxxxxx',
};
