const express = require("express");
const app= express();
const path= require("path");
const seedDB = require("./seed");
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping_app')
.then(()=>{
    console.log("db connected successfully");
})
.catch((err)=>{
    console.log("db not connected");
    console.log(err);
})

app.set("view_engine","ejs");
app.set("views",path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));


// seeding database

// seedDB()
// data sirf ek baar seed kia jata hai isliye ek baar run krke comment krdete hain, //
// kyuki nodemon ki wjh se server br br restart hota hai toh data br br seed hoga kyuki 
// nodemon br br app.js chalayega jisme seeding ho rhi , jisse same data br br copy hoga db me 
// isliye ek br chalakr comment krdena

app.listen("8080",()=>{
    console.log("server connected at port 8080");
})