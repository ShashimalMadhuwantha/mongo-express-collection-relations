const express = require('express');
const {
  createDepartment,
  getDepartments,
  getDepartmentById,
} = require('../controllers/departmentController');

const router = express.Router();

// POST request to create a department
router.post('/', createDepartment);

// GET request to retrieve all departments
router.get('/', getDepartments);

// GET request to retrieve a department by ID
router.get('/:id', getDepartmentById);

module.exports = router;
