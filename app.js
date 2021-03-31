var express = require("express");
var mongoose = require("mongoose");
const Schema = require("./schema");
const connectDB = require("./mongooseURL")
const { dirname } = require("path");
var app = express();
app.use(express.json())
var path = require("path");
const schema = require("./schema");
app.get("/start", (request, response) => {
  response.sendFile(path.join(__dirname+"/index.html"));
});
app.post("/product", (req,res)=>{
    const a = {
        product: req.body.product,
        price: req.body.price,
    };
    console.log(a);
    const CurPost = new Schema(a);
    CurPost.save().then(()=>{
        res.json({a,successful: "OK"});
    }).catch((err)=>{
        console.log(err);
        res.json({a,successful: "OK"});
    });
});
app.post("/productprice",async(req,res)=>{
    console.log(req.body.price);
    const a = {
        product: req.body.product
    };
    const PostResult = await schema.findOne(a);
    console.log(PostResult);
    res.send({PostResult, successful: "OK"});
});
app.post("/info", async (req,res)=>{
    const a = {
        product: schema.product,
        price: schema.price,
    };
    const All_Result = await schema.find();
    console.log(All_Result);
    res.json({All_Result, successful: "OK"});
});

var port = 3000;
app.listen(port,()=>{
    console.log(`App started on port, ${port}`)
});