const mongoose = require("mongoose");

const {
  String,
  Number,
  Boolean,
  Date,
  Mixed,
  ObjectId
} = mongoose.Schema.Types;


const sms_fee = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  created_by: { type: ObjectId, ref: "admin" },
  update_at: { type: Date },
  updated_by: { type: ObjectId, ref: "admin" },

  sms_userID : { type: ObjectId, ref: "sms_users" },
  fee_submit : { type: Date, default: Date.now },
  fee_month : String ,
  fee_pay : String 

});

module.exports = mongoose.model("sms_fee", sms_fee);