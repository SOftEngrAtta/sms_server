const mongoose = require("mongoose");

const {
  String,
  Number,
  Boolean,
  Date,
  Mixed,
  ObjectId
} = mongoose.Schema.Types;


const sms_users = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  created_by: { type: ObjectId, ref: "admin" },
  update_at: { type: Date },
  updated_by: { type: ObjectId, ref: "admin" },

  image: String,

  full_name: String,
  age : Number ,
  email : String ,
  cell_number : Number ,
  parent_name : String ,
  home_address : String ,
  user_class : [{type : ObjectId , ref : 'sms_class'}],
  subject : [{type : ObjectId , ref : 'subject'}],  
});

module.exports = mongoose.model("sms_users", sms_users);