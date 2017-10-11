var express  = require('express');
var app      = express();
var bodyParser   = require('body-parser');
var MongoClient = require('mongoose');

// Connect with Database

MongoClient.connect('mongodb://localhost:27017/wunderlist', (err, db)=> {
    if(err){
        console.log('Mongo is not working');
    }else{
        console.log('You are now connected with MongoDB');
    }
});

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST , PUT, PATCH , DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});

// set up our express application
app.use(bodyParser.json()); // get information from html forms
// app.use(bodyParser.urlencoded({ extended: true }));


var taskRoutes = require('./app/router/task.js')(app); 
app.use('/task' , taskRoutes);

app.get('*',function(req,res){
    res.send('wunder list is running');
})


app.listen(3000 , function(){
    console.log('server is running')
});