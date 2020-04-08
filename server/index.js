// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../database-mysql');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../public'));

app.get('/api/listings', (req, res) => {
  axios.get('https://jobs.github.com/positions.json?search=front')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error)
    })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});