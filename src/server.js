const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
// const crypto = require('crypto');
const cors = require('cors');
const pino = require('pino');
const expressLogger = require('express-pino-logger');

const app = express();

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
global.logger = logger;

if (['development', 'production'].includes(process.env.NODE_ENV)) {
  app.use(expressLogger({ logger }));
}

app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.get('/', (req, res) => {
  logger.debug('api is working...');
  res.json({
    message: 'api works',
  });
});

app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/user', require('./routes/user'));

module.exports = app;
