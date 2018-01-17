var express=require("express");
var bodyParser = require('body-parser');
var app=express();
var exphbs     = require('express-handlebars');

var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 //For Handlebars
 app.set('views', './public/views');
 app.engine('hbs', exphbs({extname: '.hbs'}));
 app.set('view engine', '.hbs');


 //Routes
 var authRoute = require('./routes/auth.js')(app);

app.get("/", function(req, res){
res.render('index');
});

// the port and the Ip address
app.listen("1025", "0.0.0.0", function(){
    console.log("server done");
  } );