// const path = require("path")
const express = require("express");
const app = express();
const port = 5000
const bodyParser = require('body-parser');

//set bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.send("hello SlNightLife ");
});


app.listen(port, () => {
    console.log(`Running on port ${port}`);
})




// app.use(cors()) 