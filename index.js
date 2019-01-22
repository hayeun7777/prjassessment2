// Requires
var express = require('express');
var layouts = require('express-ejs-layouts');
var methodOverride = require('method-override');
var parser = require('body-parser');
var db = require('./models');

// Declare express app
var app = express();

// Declare a refernce to the models folder
var db = require('./models');

// Set views to EJS
app.set('view engine', 'ejs');

//use Middleware
app.use(methodOverride('_method'));
app.use(layouts);
app.use(parser.urlencoded({ extended: false}));
app.use('/', express.static('static'));


// Declare routes
app.get('/', function(req, res){
	res.render('home');
})


//include any controllers we need
app.use('/favorites', require('./controllers/favorites.js'));


// Listen on a port
app.listen(process.env.PORT || 3000, function(){
	console.log("Hello world!");
});
