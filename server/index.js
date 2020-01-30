const express = require('express');
const mongoose = require('mongoose');

const ticketRoutes = require('./routes/ticket');


const app = express();

app.use('/api/v1/ticket', ticketRoutes)

const mongoDbURI = 'mongodb://tic-user:t1cp4ssw0rd@localhost:27017/ticketing';
const mongoDbOptions = { "useNewUrlParser": true };
mongoose.connect(mongoDbURI, mongoDbOptions)
    .then(
        function() 
        {
            console.log('Database OK');
        },
        function(error)
        {
            console.log('Database KO');
            console.log(error);
        }
    );

app.listen(3001,
    function()
    {
        console.log('Server ON');
    }
);
