
module.exports = {
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '...',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || '...',
  SECRET: 'shh...',
  EMAIL_SECRET: 'something',
  SMTP_HOST: 'smtp.gmail.com',
  SMTP_USER: 'thien.tuan.tran@gmail.com',
  SMTP_PASS: process.env.MAIL_PASSWORD|| '...',
  MONGO: process.env.MONGO || 'mongodb://localhost/test',
  APP_ACCESS_CONTROLE_ALLOW_ORIGIN: process.env.APP_ACCESS_CONTROLE_ALLOW_ORIGIN || 'http://sandbox.dev:8080',
  APP_URL: process.env.SITE || 'http://sandbox.dev:8080'
};