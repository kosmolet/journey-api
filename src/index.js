require('dotenv').config();
const { connectDB } = require('./config/database');
const app = require('./server');

const PORT = process.env.PORT || 5001;

connectDB();

app.listen(PORT, () => logger.debug(`Running on ${PORT} port`));
