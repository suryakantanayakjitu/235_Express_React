var express = require('express');
var bodyParser = require('body-parser');
var userRouter = require('./user-routes')
const deptsRouter = require('./depts-routes');

var app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({extended : false}));
app.use("/user",userRouter);
app.use("/depts", deptsRouter)


app.set("view engine", "ejs");

app.get("/", function (req, res) {   
    res.render("home", {});
});


var server = app.listen(3004,function(){
    console.log("Server Started at port 3002, http://localhost:3004");
})