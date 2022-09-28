const { response } = require("express");
const express = require("express");
const router = express.Router();

require("../connectDB");

const Employee = require("../EmployeSchema/employe-schema");

// post  Route

router.post("/newemployee", async (req, res) => {
  try {
    if (!req.body) {
      return res.status(422).json({ error: "please  input fill properly" });
    }
  } catch (error) {
    console.log(error);
  }
  const employee = new Employee({
    fullname: req.body.fullname,
    email: req.body.email,
    empID: req.body.empID,
    gender: req.body.gender,
  });
  await employee.save();
  return res.status(200).json({ message: " Registeration successfull." });
});

//  GET Method to call all employees

router.get("/employees", async (req, res) => {
  try {
    await Employee.find().then((employee) => {
      return res.json(employee)
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// get employee details

router.get("/employee/:id", async (req, res) => {
  try {
    await Employee.findById(req.params.id).then((employee) => {
      return res.json(employee);
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.put("/updateemployee/:id", async (req, res) => {
  try {
    await Employee.findByIdAndUpdate(req.params.id , req.body).then((data) => {
        if (!data) {
            return res.status(404).json({ message: "Employee not found." });
        } else {
            res.json("employee data updated successfully");
        }
    });
  } catch (error) {
    res.status(404).send("error" + error);
  }
});

// delete employee

router.delete("/deleteemployee/:id", async (req, res) => {
    // const { id } = req.params.id;
    try {
        
     await Employee.findByIdAndDelete(req.params.id).then((data) => {
         if (!data) {
             res.status(404).send({ message: "cannot delete must be id is invalid or employee is already deleted" })
         } else {
             res.send("employee deleted successfully");
        }
     });
 } catch (error) {
    res.status(404).send("error" + error)
 }
});

module.exports = router;
