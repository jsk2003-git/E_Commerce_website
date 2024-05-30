const express = require("express");
const Product = require("../models/Product");
const router = express.Router(); // mini instance of app

router.get("/products", async(req,res)=>{
    let products= await Product.find({});
    res.render("products/index",{products});
})

module.exports = router;