const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const serve = require('serve-static');
const path = require('path');
const devjobsRoutes = require('./routes/devjobs.routes');

// const app = require('./app');
const app = express();
app.use(cors());

colors.setTheme({
  success: ['bgGreen', 'black', 'underline', 'bold'],
});

app.use(express.json());

app.use(serve(__dirname + '/dist'));

app.use('/v1/devjobs/jobs', devjobsRoutes);

dotenv.config();

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`SERVER IS LISTENING ON PORT ${PORT}`.success));
