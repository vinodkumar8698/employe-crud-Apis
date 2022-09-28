const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },


  gender: {
    type: String,
    required: true,
  },
  

  empID: {
    type: Number,
    required: true,
  }
});

// hashing password



const Employee = mongoose.model("employee details", employeSchema);

module.exports = Employee;
