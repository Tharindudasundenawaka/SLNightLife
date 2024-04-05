// const path = require("path")
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000

app.use(cors()) 

//set bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/hello', (req, res) => {
    res.send('Hello Worlds');
  });


app.listen(port, () => {
    console.log(`Running on port ${port}`);
})





// .env