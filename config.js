
module.exports = {
  SMTP_PASS: process.env.MAIL_PASSWORD|| '...',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/test',
  APP_ACCESS_CONTROLE_ALLOW_ORIGIN: process.env.APP_ACCESS_CONTROLE_ALLOW_ORIGIN || 'http://sandbox.dev:8080',
  APP_URL: process.env.SITE || 'http://sandbox.dev:8080'
};