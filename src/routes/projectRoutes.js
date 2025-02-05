const express = require('express');
const {
  createProject,
  addEmployeeToProject,
  getProjects,
  getProjectById,
} = require('../controllers/projectController');

const router = express.Router();

// POST request to create a project with employees
router.post('/', createProject);

// POST request to add an employee to a project
router.post('/add-employee', addEmployeeToProject);

// GET request to retrieve all projects with employees
router.get('/', getProjects);

// GET request to retrieve a project by ID with employees
router.get('/:id', getProjectById);

module.exports = router;
