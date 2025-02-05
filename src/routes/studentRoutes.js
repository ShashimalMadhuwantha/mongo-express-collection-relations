const express = require('express');
const { createStudent, getAllStudents } = require('../controllers/studentController');

const router = express.Router();

router.post('/', createStudent);
router.get('/', getAllStudents);

module.exports = router;
