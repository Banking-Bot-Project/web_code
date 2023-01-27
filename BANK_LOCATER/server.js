const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { dirname } = require('path');

// here we will load env variables
dotenv.config({path: './config/config.env' });

// connect database
connectDB();

// initialize express
const app = express();

// BODY PArser
app.use(express.json());

//enable cors
app.use(cors());

// it is used to create static folder in node
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log('server running in ${process.env.NODE_ENV} mode on port ${PORT}'
));