var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbSchema = new Schema({
   
 firstName: {
  type : String,
  required: 'Enter a first name'
},
lastName: {
   type: String,
   required: 'Enter a last name'
  },
email: {
   type: String
},
password:{
   type: String
},
created_date: {
   type: Date,
   default: Date.now
}  
});

module.export = mongoose.model('userSchema',dbSchema);