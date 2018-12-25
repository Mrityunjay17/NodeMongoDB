const mongoose=require("mongoose");
const Schema=mongoose.Schema;

var productSchema=new Schema({
    name:String,
    price:Number
});

var products=mongoose.model("Products",productSchema);

module.exports=products;