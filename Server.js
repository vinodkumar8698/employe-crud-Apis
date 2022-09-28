const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const dotenv = require("dotenv");
const cors = require("cors");

// dotenv.config({ path: "./config.env" });
require("./connectDB");
// backend server start
app.use(express.json());
app.use(cors());

app.use(require("./Routes/routes"));
const Employee = require("./EmployeSchema/employe-schema");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});