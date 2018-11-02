var mongoose = require('mongoose');
var express = require('express');
var User = require('./models/user.model')
var route = express.Router();


//for testing in postman
route.get('/users', (req, res) => {
    res.json({
        users: "We are comming"
    })
})

route.post('/users', (req, res) => {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.isSeller = req.body.isSeller;
    user.save();
    res.json({
        success : true,
        message : "User registere successfully"
    })
    console.log('The req body is', req.body);
})

module.exports = route; // because here router containing all the api