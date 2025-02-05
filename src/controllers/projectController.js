const Project = require('../models/project');

// Create a new project with employees
exports.createProject = async (req, res) => {
  const { title, description, deadline, employees } = req.body;

  try {
    const newProject = new Project({
      title,
      description,
      deadline,
      employees,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add an employee to an existing project
exports.addEmployeeToProject = async (req, res) => {
  const { projectId, employee } = req.body;

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    project.employees.push(employee); // Add the employee to the project
    await project.save();

    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all projects with their employees
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a project by ID with its employees
exports.getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
