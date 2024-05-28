// data ko seed krna mtlb database me data laana

const mongoose= require("mongoose");

const Product = require("./models/Product");

const products=[
    {
        name: "Xperia Z",
        img:"https://images.unsplash.com/photo-1519223400710-6da9e1b777ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eHBlcmlhJTIweiUyMHBob25lfGVufDB8fDB8fHww",
        price:20000,
        desc:"a good phone"

    },
    {
        name:"Samsung",
        img:"https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww",
        price:25000,
        desc:"accha hai ye bhi"
    },
    {
        name:"Iphone",
        img:"https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fHww",
        price:200000,
        desc:"le sko toh khareed lo"
    }
]

//almost all db methods like .insertMany()  return promises
// promises create callback hell , to prevent it , we use async await..
//which ensures ki jab tk wo task na hojaye tb tk whi ruke rho
// async function hota hai await promise return krne wali line hoti hai.
async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded successfully");
}
module.exports=seedDB;
