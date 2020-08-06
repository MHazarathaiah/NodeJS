const express = require('express');
const mongoose = require('mongoose');

var bodyParser = require('body-parser')

var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/AlieanDBex';

const app = express();

mongoose.connect('mongodb://localhost/SUCCESS', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true});
const con = mongoose.connection;

con.on('open', () => {
    console.log('connection Opened');
});

//app.use(express.json());
app.use(bodyParser.json())

app.listen(9100, () => {

    console.log('Server Started');

});



const alienRouter = require('./routes/aliens');
app.use('/aliens', alienRouter);
