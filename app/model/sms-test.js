const mongoose = require("mongoose");

const {
  String,
  Number,
  Boolean,
  Date,
  Mixed,
  ObjectId
} = mongoose.Schema.Types;


const sms_test = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  created_by: { type: ObjectId, ref: "admin" },
  update_at: { type: Date },
  updated_by: { type: ObjectId, ref: "admin" },

  sms_userID : { type: ObjectId, ref: "sms_users" },
  test_date : { type: Date, default: Date.now },
  subject : {type : ObjectId , ref : 'subject'},
  total_marks : Number ,
  obtained_marks : Number  

});

module.exports = mongoose.model("sms_test", sms_test);