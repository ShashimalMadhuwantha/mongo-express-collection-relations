const Employee = require('../models/employee');
const Department = require('../models/department');

// Register employee to a department (already existing)
exports.createEmployee = async (req, res) => {
  const { name, role, departmentId } = req.body;

  try {
    const department = await Department.findById(departmentId);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    const newEmployee = new Employee({
      name,
      role,
      department: departmentId,
    });

    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('department');
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get an employee by ID
exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id).populate('department');
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getEmployeeWithDepartment = async (req, res) => {
    try {
      // Use populate() to get the department name along with employee details
      const employee = await Employee.findById(req.params.id).populate('department', 'name');  // Populate department with just 'name'
  
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      // Send back the employee data with the department name
      res.status(200).json({
        name: employee.name,
        role: employee.role,
        department: employee.department.name,  // Display department name
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };