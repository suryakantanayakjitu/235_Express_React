const express = require("express");
const StudentModel = require('./models/studdent-model');
const router = express.Router();


router.get("/Stds", async function (req, res) {

    let result = await StudentModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);    
    }
});


router.get("/Stds/:id", async function(req, res)
{
    var sno =  req.params.id;   	    
    let result  =  await StudentModel.findOne({ rollNo: sno}, {"_id":0});   
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


router.post('/Stds',  async  function (req,res)
{ 
        var stdObj  = new  StudentModel({ 
            name  :  req.body.name,
            email   : req.body.email,
            username: req.body.username ,
            password: req.body.password,
            rollNo : req.body.rollNo  });

        let newObj  =  await  stdObj.save(); 
		
		var result = {};
		result.status  = "Record inserted in Database";
		console.log("[Create] - Record inserted in Database");
		res.send(result);           
});



router.put('/Stds',  async function (req,res)
{ 
        var stdObj  = {};
        stdObj.name =  req.body.name;
        stdObj.email =  req.body.email; 
        stdObj.username =  req.body.username; 
        stdObj.password =  req.body.password; 
        stdObj.rollNo =  req.body.rollNo;

        let resResult  = await  StudentModel.findOneAndUpdate(  {rollNo:stdObj.rollNo},   {  $set : stdObj});
 
		var result = {};
		result.status  = "Record updated in Database";
		console.log("[Update] - Record updated in Database");
		res.send(result);	
});



router.delete('/Stds/:id',async function (req,res)
{  
    var roll =  req.params.id;   
    let resResult  =  await  StudentModel.findOneAndDelete({ rollNo: roll}); 

	var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
       
});

module.exports = router;
