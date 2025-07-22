const Student = require('../models/student');
const catchError = require('../Errors/catch');
const { faker } = require('@faker-js/faker');

exports.getAllStudents = catchError(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;
  const total = await Student.countDocuments();
  const students = await Student.find()
    .populate('group', 'groupCode groupName location course')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
  const data = students.map((student) => ({
    id: student._id,
    name: student.name,
    studentCode: student.studentCode,
    parentPhone: student.parentPhone,
    age: student.age,
    email: student.email,
    source: student.source,
    paid: student.paid,
    group: student.group,
    info: student.info,
    note: student.note,
    createdAt: student.createdAt,
    updatedAt: student.updatedAt,
  }));
  res.json(data);
});


exports.getStudentById = catchError(async (req, res) => {
  const student = await Student.findById(req.params.id).populate('group');
  if (!student) return res.status(404).json({ error: 'الطالب غير موجود' });
  res.json(student);
});

exports.upsertStudent = catchError(async (req, res) => {
  try {
    const { id, ...data } = req.body;
    if (id) {
      const student = await Student.findById(id);
      if (student) {
        student._modifiedBy = req.user?.name || 'system';
        Object.keys(data).forEach((key) => {
          student[key] = data[key];
        });
        await student.save();
        return res.status(200).json(student);
      }
      console.warn(`⚠️ لم يتم العثور على الطالب بالمعرف: ${id}، سيتم إنشاء جديد`);
    }
    const newStudent = await Student.create(data);
    res.status(201).json(newStudent);
  } catch (err) {
    console.error('❌ خطأ في حفظ الطالب (إنشاء/تحديث):', err);
    res.status(400).json({ error: 'فشل في حفظ الطالب', details: err.message });
  }
});



exports.createStudent = catchError(async (req, res) => {
  const bulk = true;

  if (bulk === true) {
    const students = [];

    for (let i = 1; i <= 100; i++) {
      const newStudentData = {
        ...req.body,
        name: faker.person.fullName(),
        studentCode: faker.string.alphanumeric(8),
        email: faker.internet.email(),
        age: faker.number.int({ min: 6, max: 18 }),
        parentPhone: faker.phone.number('+20##########'),
      };

      // تأكد إنه مفيش id معمول override
      delete newStudentData._id;
      delete newStudentData.id;

      students.push(newStudentData);
    }

    const inserted = await Student.insertMany(students, { ordered: true });

    return res.status(201).json({
      message: '✅ تم إضافة الطلاب (مع تخطي التكرارات)',
      insertedCount: inserted.length,
    });
  }
});


exports.updateStudent = catchError(async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: 'الطالب غير موجود' });

    student._modifiedBy = req.user?.name || 'system';

    Object.keys(req.body).forEach((key) => {
      student[key] = req.body[key];
    });

    await student.save();

    res.json(student);
  } catch (err) {
    console.error('Update student error:', err);
    res.status(400).json({ error: 'فشل في تعديل الطالب', details: err.message });
  }
});

exports.deleteStudent = catchError(async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'الطالب غير موجود' });

    res.json({ message: 'تم حذف الطالب بنجاح' });
  } catch (err) {
    console.error('Delete student error:', err);
    res.status(500).json({ error: 'فشل في حذف الطالب' });
  }
});

exports.deleteAllStudents = catchError(async (req, res) => {
  const result = await Student.deleteMany({});
  res.json({
    message: 'تم حذف جميع الطلاب بنجاح',
    deletedCount: result.deletedCount,
  });
});


exports.searchStudents = catchError(async (req, res) => {
  const query = req.query.q;
  if (!query || query.trim().length < 2) {
    return res.json([]);
  }
  const regex = new RegExp(query, 'i');
  const students = await Student.find({
    $or: [
      { name: { $regex: regex } },
      { parentPhone: { $regex: regex } },
    ],
  })
    .limit(10)
    .populate({
      path: 'group',
      select: 'groupCode location schedule price',
    }).lean();

  res.json(students);
});