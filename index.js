// we created a const, and we require express, the library install
const express = require('express');
// we require cors, for can to access of different web site
const cors = require('cors');

require('dotenv').config();

// initialization the method express
const app = express();

// use of middleware of express, for check every request what the different websites do
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});


