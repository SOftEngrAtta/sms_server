const mongoose = require("mongoose");

const {
  String,
  Number,
  Boolean,
  Date,
  Mixed,
  ObjectId
} = mongoose.Schema.Types;


const sms_class = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  created_by: { type: ObjectId, ref: "admin" },
  update_at: { type: Date },
  updated_by: { type: ObjectId, ref: "admin" },

  class_name : String 
});

module.exports = mongoose.model("sms_class", sms_class);