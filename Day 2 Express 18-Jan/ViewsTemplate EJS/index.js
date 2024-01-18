var express = require('express');

var app = express();

// app.set("view engine", "ejs");
// app.set("view engine", "pug");
app.set("view engine", "hbs");

app.get("/", function(req,res){
    let dataObj = {};
    dataObj.uname = "Surya";
    dataObj.age = 23;
    dataObj.Loc = "Cuttack";

    dataObj.citiesOfArray = ["Hydrabad","Mumbai", "Pune", "Cuttack", "Delhi"];

    dataObj.deptObj = {dptno: 10, dptName: "IT", loc: "Hyd"};

    dataObj.deptsArray = [
        { deptno: 10, dname: "Accounts", loc: "Hyd" },
        { deptno: 20, dname: "Sales", loc: "Pune" },
        { deptno: 30, dname: "Marketing", loc: "Hyd" },
        { deptno: 40, dname: "Operations", loc: "Chnnai" },
    ];
    res.render("home", dataObj);

});

var server = app.listen(3004,function(){
    console.log("Server Started at port 3002, http://localhost:3004");
})