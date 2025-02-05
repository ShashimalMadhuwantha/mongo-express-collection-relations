const express = require('express');
const {
  createEmployee,
  getEmployees,
  getEmployeeById,
} = require('../controllers/employeeController');

const router = express.Router();

// POST request to create an employee
router.post('/', createEmployee);

// GET request to retrieve all employees
router.get('/', getEmployees);

// GET request to retrieve an employee by ID
router.get('/:id', getEmployeeById);

module.exports = router;
