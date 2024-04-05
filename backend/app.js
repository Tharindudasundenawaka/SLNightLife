// const path = require("path")
import express from'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(cors()) 

//set bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/hello', (req, res) => {
    res.send('Hello Worlds');
  });



//Create Port
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`Server at running on the port: http://localhost:${PORT}`);
})


