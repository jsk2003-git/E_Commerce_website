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
    },
    reviews:[
        {
            // reviews array me har review ki bas id store kri jayegi usi se pura object mil jayega
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
})

//model's name is Product
let Product = mongoose.model("Product",productSchema);

module.exports=Product;