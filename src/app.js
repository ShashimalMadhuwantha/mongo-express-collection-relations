const express = require('express');
const bodyParser = require('body-parser');
const departmentRoutes = require('./routes/departmentRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const projectRoutes = require('./routes/projectRoutes');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/departments', departmentRoutes);
app.use('/employees', employeeRoutes);
app.use('/projects', projectRoutes);
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);
// Error handling middleware
app.use(errorMiddleware);

module.exports = app;
