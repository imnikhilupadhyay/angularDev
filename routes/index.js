var express = require('express');
var router = express.Router();
var userSchema = require('mongoose').model('userSchema');


router.get('/', function(req, res) {
 res.render('index');
});


router.post('/',function(req,res,next){
 res.status(200); 
  userSchema.find({})
  .exec(function(err,user){
    if(err)
    console.log("error");
    else
    console.log("userSchema");//to get json data from front end and send it to back-end
  
  })
  next();
});

module.exports = router;