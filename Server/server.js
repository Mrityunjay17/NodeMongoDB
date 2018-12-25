const express =require("express");
const bodyParser=require("body-parser");
const product=require("./../Routes/products");

var app=express();
app.use(bodyParser.json());
app.use(product);

app.get("*",(req,res)=>{
    res.send('404 Not Found');
})

module.exports=app;
