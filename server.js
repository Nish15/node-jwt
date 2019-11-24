const express = require('express');
const logger = require('morgan');
const users = require('./routes/users');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');


var jwt = require('jsonwebtoken');
const app = express();
app.set('secretKey', 'nodeRestApi');

mongoose
.connect('mongodb://localhost/node_rest_api_jwt', {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log("DB Connection Error:");
});
// mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.json({'tutorials' : 'Build Api using JWT'});
});

app.use('/users', users);

app.listen(3000, function() {
    console.log('Node Server listening on port 3000');
});