require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const expressionsRouter = require('./routes/expressions');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 4001;

// Middleware
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(express.json());

// Routes
app.use('/expressions', expressionsRouter);

// Error Handling Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});