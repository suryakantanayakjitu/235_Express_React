const express = require("express");
const EmpModel = require('./models/emp-model');
const router = express.Router();


router.get("/Emps", async function (req, res) {

    let result = await EmpModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);    
    }
});


router.get("/Emps/:id", async function(req, res)
{
    var sno =  req.params.id;   	    
    let result  =  await EmpModel.findOne({ empno: sno}, {"_id":0});   
    if (JSON.stringify(result) === "null")
    {
        console.log(`There is no student id record ${sno}`)
        res.send(`There is no student id record  id ${sno}`);     
    }
    else{
        console.log("[Read Single] - " + JSON.stringify(result));
        res.send(result);     
    }
});


router.post('/Emps',  async  function (req,res)
{ 
        var empObj  = new  EmpModel({ 
            empno : req.body.empno,
            ename  :  req.body.ename,
            email   : req.body.email,
            username: req.body.username ,
            password: req.body.password });

        let newObj  =  await  empObj.save(); 
		
		var result = {};
		result.status  = "Record inserted in Database";
		console.log("[Create] - Record inserted in Database");
		res.send(result);           
});



router.put('/Emps',  async function (req,res)
{ 
        var empObj  = {};
        empObj.empno =  req.body.empno;
        empObj.ename =  req.body.ename;
        empObj.email =  req.body.email; 
        empObj.username =  req.body.username; 
        empObj.password =  req.body.password; 

        let resResult  = await  EmpModel.findOneAndUpdate(  {empno:empObj.empno},   {  $set : empObj});
 
		var result = {};
		result.status  = "Record updated in Database";
		console.log("[Update] - Record updated in Database");
		res.send(result);	
});



router.delete('/Emps/:id',async function (req,res)
{  
    var empid =  req.params.id;   
    let resResult  =  await  EmpModel.findOneAndDelete({ empno: empid}); 

	var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
       
});

module.exports = router;