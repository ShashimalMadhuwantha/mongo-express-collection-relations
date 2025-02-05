const express = require('express');
const {
  enrollStudentInCourse,
  getStudentsInCourse,
  getCoursesForStudent
} = require('../controllers/enrollmentController');

const router = express.Router();

// Enroll a student in a course
router.post('/', enrollStudentInCourse);

// Get all students in a specific course
router.get('/course/:id', getStudentsInCourse);

// Get all courses a student is enrolled in
router.get('/student/:id', getCoursesForStudent);

module.exports = router;
