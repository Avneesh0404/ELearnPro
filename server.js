const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./userRoute');
const cors = require('cors');

app.use(cors());

app.use(express.json());

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
/*--------------------URI Needed----------------------*/
mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    sslValidate: true
})
.then(() => {
    console.log('Successfully Established');
    app.listen(process.env.PORT || 8000, (err) => {
        if (err) console.log(err, 'This is the PORT error');
        console.log('Successfully connected to the server', process.env.PORT || 8000);
    });
})
.catch((err) => {
    console.log(err, 'This is the main error');
});

app.use(userRoute);








