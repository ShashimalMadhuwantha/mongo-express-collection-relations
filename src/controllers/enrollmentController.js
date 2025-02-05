const Enrollment = require('../models/enrollment');
const Student = require('../models/student');
const Course = require('../models/course');

// Enroll a student in a course
exports.enrollStudentInCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const student = await Student.findById(studentId);
    const course = await Course.findById(courseId);

    if (!student || !course) {
      return res.status(404).json({ message: 'Student or Course not found' });
    }

    const enrollment = new Enrollment({ student: studentId, course: courseId });
    await enrollment.save();

    res.status(201).json({ message: 'Enrollment successful' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// Get all students enrolled in a specific course
exports.getStudentsInCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    // Find all enrollments related to the course, then populate the student details
    const enrollments = await Enrollment.find({ course: courseId }).populate('student');

    if (enrollments.length === 0) {
      return res.status(404).json({ message: 'No students enrolled in this course' });
    }

    // Extract student details from the enrollments
    const students = enrollments.map(enrollment => enrollment.student);

    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




// Get all courses a student is enrolled in
exports.getCoursesForStudent = async (req, res) => {
  try {
    const studentId = req.params.id;

    // Find all enrollments for the student
    const enrollments = await Enrollment.find({ student: studentId }).populate('course');

    if (enrollments.length === 0) {
      return res.status(404).json({ message: 'Student is not enrolled in any courses' });
    }

    // Extract courses from the enrollments and return them
    const courses = enrollments.map(enrollment => enrollment.course);

    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

