const express = require('express');
const cors = require('cors');
const hpp = require('hpp');
const limit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const morgan = require('morgan');
const helmet = require('helmet');
const dotEnv = require('dotenv');
dotEnv.config();
const mongoose = require('mongoose');
const router = require('./routes/api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(mongoSanitize());
app.use(hpp());

const limiter = limit({
    windowMs : 1 * 60 * 1000,
    max : 30
})

app.use(limiter)

const port = process.env.PORT || 8000;
const mongoURL = process.env.DATABASE;

mongoose.connect(mongoURL)
.then(() => {
    console.log("Databse is Connected...")
})
.catch((err) => {
    console.log(err)
    process.exit(1)
})

app.use('/api/v1', router)

module.exports = { app, port }

