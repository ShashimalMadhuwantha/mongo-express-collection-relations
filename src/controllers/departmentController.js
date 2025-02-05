const Department = require('../models/department');

// Add new department (already existing)
exports.createDepartment = async (req, res) => {
  const { name, location } = req.body;

  try {
    const newDepartment = new Department({ name, location });
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all departments
exports.getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a department by ID
exports.getDepartmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const department = await Department.findById(id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
