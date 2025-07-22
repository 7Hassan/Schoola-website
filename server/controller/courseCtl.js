const Course = require('../models/course');
const catchError = require('../Errors/catch');

exports.getAllCourses = catchError(async (req, res) => {
  const courses = await Course.find().sort({ createdAt: -1 });
  res.json(courses);
});

exports.getCourseById = catchError(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ error: 'الكورس غير موجود' });
  res.json(course);
});

exports.createCourse = catchError(async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
});

exports.updateCourse = catchError(async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!course) return res.status(404).json({ error: 'الكورس غير موجود' });
  res.json(course);
});

exports.deleteCourse = catchError(async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) return res.status(404).json({ error: 'الكورس غير موجود' });
  res.json({ message: 'تم حذف الكورس بنجاح' });
});
