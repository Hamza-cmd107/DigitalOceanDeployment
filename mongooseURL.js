const mongoose = require("mongoose");
require("dotenv").config({path: ".env"});

// console.log(process.env.URI);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.URI,{useNewUrlParser: true },{ useUnifiedTopology: true }, { useMongoClient:true }).then(()=>console.log("connected"));