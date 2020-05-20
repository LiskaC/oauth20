#! /usr/local/bin/node
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/oauthusers', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var userSchema = new mongoose.Schema({

})

var User = mongoose.model('User', userSchema);


console.log(process.argv);