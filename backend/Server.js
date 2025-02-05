require('dotenv').config();
const cors = require('cors');
const express = require('express');
// const router = express.Router()impo


const app = express();
app.use(cors());
var corsOptions = {
  origin: 'http://localhost:3000/',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  Credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const router = require('./Router/auth-router');
const connectDB = require('./utils/db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello World');
});

connectDB().then(() => {
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});