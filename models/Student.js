const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  roll: {
    type: Number,
    required: true,
    unique: true
  },
  marks: {
    english: Number,
    maths: Number,
    science: Number
  }
});

module.exports = mongoose.model("Student", studentSchema);
