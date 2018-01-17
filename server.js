var express=require("express");
var app=express();
var exphbs     = require('express-handlebars');


app.use(express.static(path.join(__dirname, '/public')));


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 //For Handlebars
 app.set('views', './app/views');
 app.engine('hbs', exphbs({extname: '.hbs'}));
 app.set('view engine', '.hbs');


 //Routes
 var authRoute = require('./app/routes/auth.js')(app);

app.get("/", function(req, res){
res.send()
});