var express = require('express');
const path = require("path");
const dbRouter = express.Router();
var mongoose = require("mongoose"); 

const dbSchema = require(path.join(__dirname+'/model/dbSchema'));


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/userSchema',function(err,db){
  if(!err)
  console.log("database connected");
});

module.export=dbRouter;