var express = require('express');

var app = express();

app.get("/", function(req,res){
    let empId = "10256";
    let empName = "Narasimha Rao";
    let empJob = "Manager";
    let empDeptNo = "100";
    let empEmail = "tnrao.trainer@gmail.com";

    let str = `
    <div>
    <b style="color: red;"> Employee Id:  </b> ${empId}  <br>
    <b style="color: red;"> Employee Name:  </b> ${empName} <br>
    <b style="color: red;"> Employee Job:  </b> ${empJob} <br>
    <b style="color: red;"> Employee Deptno:  </b> ${empDeptNo} <br>
    <b style="color: red;"> Employee EmailId:  </b> ${empEmail} <br>
    </div>
    `

    res.send(str);
})

var server = app.listen(3004,function(){
    console.log("Server Started at port 3002, http://localhost:3004");
})