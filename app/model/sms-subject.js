const mongoose = require("mongoose");

const {
  String,
  Number,
  Boolean,
  Date,
  Mixed,
  ObjectId
} = mongoose.Schema.Types;


const subject = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  created_by: { type: ObjectId, ref: "admin" },
  update_at: { type: Date },
  updated_by: { type: ObjectId, ref: "admin" },

  subject_name : String 

});

module.exports = mongoose.model("sms_class", subject);