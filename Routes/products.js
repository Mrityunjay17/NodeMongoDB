const express=require("express");
const dbConnection=require("./../DataBase/DataBaseConnection");
const Products=require("./../model/product");

const routes=express.Router();

routes.post("/product",(req,res)=>{
    //Open Test DataBase Connection
    dbConnection.openConnection("Test");
    let product=new Products({
        name:'Laptop',
        price:120000
    })

    product.save((error,productDetails)=>{
         if(error!=undefined || error !=null){
             console.log("Data Insert Error"+error);
         }

         res.send(productDetails);
          //Close current Data base Connection
         dbConnection.closeConnection()
    });
});


routes.get("/product/:id",(req,res)=>{
    let id=req.params.id;

    dbConnection.openConnection("Test");

    Products.findById(id,(error,dataRes)=>{
        if(error!=undefined || error !=null){
            res.send(error);
        }else{
            res.send(dataRes);
        }
         //Close current Data base Connection
        dbConnection.closeConnection()
    })
});

module.exports=routes;