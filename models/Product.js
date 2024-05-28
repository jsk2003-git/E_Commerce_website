const mongoose = require("mongoose");

//schema
const productSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        min:0,   // because price can never be negative
        required:true
    },
    desc:{
        type:String,
        trim:true
    }
})

//model's name is Product
let Product = mongoose.model("Product",productSchema);

module.exports=Product;