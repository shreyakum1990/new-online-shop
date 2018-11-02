var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
var route = express.Router(); 
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/myonline",()=>{
    console.log('Database connected');
})
// route.get('/test',( req,res)=>{
//     res.json({
//         message : "Hello world"
//     })
// })//so for testing purpose 



var accountRouter = require('./account');
app.use('/api/account',accountRouter);
app.listen(3000,()=>{
    console.log('Server Starts');
})  