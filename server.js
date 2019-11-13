var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars").create({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: 'main',
    //extname: 'hbs'
    extname: 'handlebars'
});

app.engine("handlebars", exphbs.engine);
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, "views"));

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});