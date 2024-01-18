var express = require('express');

var app = express();

app.set("view engine", "ejs");

app.use(express.static('public'))

app.get("/", function(req,res){
    let dataObj = {};

    dataObj.users = [
        {id: 1, email: "george.bluth@reqres.in", first_name: "George", last_name: "Bluth", avatar: "/images/user1.jpg"},
        {id: 2, email: "janet.weaver@reqres.in", first_name: "Janet", last_name: "Weaver", avatar: "/images/user2.jpg"},
        {id: 3, email: "emma.wong@reqres.in", first_name: "Emma", last_name: "Wong", avatar: "/images/user3.jpg"},
        {id: 4, email: "eve.holt@reqres.in", first_name: "Eve", last_name: "Holt", avatar: "/images/user4.jpg"},
        {id: 5, email: "charles.morris@reqres.in", first_name: "Charles", last_name: "Morris", avatar: "/images/user5.jpg"},
        {id: 6, email: "tracey.ramos@reqres.in", first_name: "Tracey", last_name: "Ramos", avatar: "/images/user6.jpg"}
    ];

    res.render("home", dataObj);

});

var server = app.listen(3004,function(){
    console.log("Server Started at port 3002, http://localhost:3004");
})