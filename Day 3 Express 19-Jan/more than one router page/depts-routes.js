const express = require("express");
const router = express.Router();

router.get("/AllDepts", function (req, res) {

    let dataObj = {};    
    dataObj.deptsArray = [
        { deptno: 10, dname: "Accounts", loc: "Hyd" },
        { deptno: 20, dname: "Sales", loc: "Pune" },
        { deptno: 30, dname: "Marketing", loc: "Hyd" },
        { deptno: 40, dname: "Operations", loc: "Chnnai" },
    ];

    res.render("showalldepts", dataObj);
});

router.get("/GetDeptById/:id", function (req, res) {

   // console.log("Requested Deptno : " + req.params.id);

   var deptsArray = [
        { deptno: 10, dname: "Accounts", loc: "Hyd" },
        { deptno: 20, dname: "Sales", loc: "Pune" },
        { deptno: 30, dname: "Marketing", loc: "Hyd" },
        { deptno: 40, dname: "Operations", loc: "Chnnai" },
    ];

    let dno = req.params.id;
    let dataObj = {};    
    dataObj.deptObj = deptsArray.find( item => item.deptno == dno );

    res.render("deptdetails", dataObj);
});

module.exports = router;