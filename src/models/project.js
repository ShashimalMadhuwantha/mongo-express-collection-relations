const mongoose = require('mongoose');

// Employee Subdocument Schema (same as before)
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
});

// Project Schema with embedded employees
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  employees: [employeeSchema], // Embed an array of employees
});

module.exports = mongoose.model('Project', projectSchema);
