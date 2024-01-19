const express = require("express");
const router = express.Router();

router.get("/allProduts", function(req,res){
    let dataObj = {};    
    dataObj.productsArray = [
        { pid: 1, pname: "Table", pprice:9500, quantity: 10, category: "Furniture" },
        { pid: 2, pname: "Bike", pprice:500000, quantity: 75, category: "Vechile" },
        { pid: 3, pname: "Phones", pprice:35000, quantity: 48, category: "Electronics" },
        { pid: 4, pname: "Shirts", pprice:2500, quantity: 350, category: "Fashion" },
    ];

    res.render("showallproduts", dataObj);
});


//  ~~~~~~~~~~~~~~~~   Get Product Detail By Id in params   ~~~~~~~~~~~~~~~~~

// router.get("/GetProdById/:id", function (req, res) {
    
//     var productsArray = [
    //         { pid: 1, pname: "Table", pprice:9500, quantity: 10, category: "Furniture" },
    //         { pid: 2, pname: "Bike", pprice:500000, quantity: 75, category: "Vechile" },
//         { pid: 3, pname: "Phones", pprice:35000, quantity: 48, category: "Electronics" },
//         { pid: 4, pname: "Shirts", pprice:2500, quantity: 350, category: "Fashion" },
//      ];
 
//      let prdId = req.params.id;
//      let dataObj = {};    
//      dataObj.prodObj = productsArray.find( item => item.pid == prdId );

//      res.render("singleProductsDetailById", dataObj);
//  });



//  ~~~~~~~~~~~~~~~~   Get Product Detail By category name in query string    ~~~~~~~~~~~~~~~~~

router.get("/GetProdById", function (req, res) {
 
    var productsArray = [
        { pid: 1, pname: "Table", pprice:9500, quantity: 10, category: "Furniture" },
        { pid: 2, pname: "Bike", pprice:500000, quantity: 75, category: "Vechile" },
        { pid: 3, pname: "Phones", pprice:35000, quantity: 48, category: "Electronics" },
        { pid: 4, pname: "Shirts", pprice:2500, quantity: 350, category: "Fashion" },
     ];
 
     let prdCategory = req.query.category;
     let dataObj = {};    
     dataObj.prodObj = productsArray.find( item => item.category == prdCategory );
 
     res.render("singleProductsDetailById", dataObj);
 });


module.exports = router;