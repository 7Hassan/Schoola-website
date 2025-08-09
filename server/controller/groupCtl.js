const Group = require('../models/group');
const Student = require('../models/student.js');
const catchError = require('../Errors/catch')
const AppError = require('../Errors/classError').default

exports.getAllGroups = catchError(async (req, res) => {
  try {
    const groups = await Group.find()
      .populate('instructor', 'name')
      .populate('studentsCount')
      .populate('studentsPaidCount')
      .sort({ startDate: -1 });

    const data = groups.map((group) => ({
      id: group._id,
      groupCode: group.groupCode,
      groupName: group.groupName,
      course: group.course,
      location: group.location,
      schedule: group.schedule,
      price: group.price,
      startDate: group.startDate,
      status: group.status,
      instructor: group.instructor?.name || 'غير محدد',
      studentsCount: group.studentsCount,
      studentsPaidCount: group.studentsPaidCount,
      isCompleted: group.isCompleted,
      hasStarted: group.hasStarted,
    }));

    res.json(data);
  } catch (err) {
    console.error('Error fetching groups:', err);
    res.status(500).json({ error: 'فشل في تحميل الجروبات' });
  }
}
);

exports.getGroupById = catchError(async (req, res) => {
  try {
    const group = await Group.findById(req.params.id)
      .populate('instructor')
      .populate('studentsCount')
      .populate('studentsPaidCount');

    if (!group) return res.status(404).json({ error: 'الجروب غير موجود' });

    const students = await Student.find({ group: group._id });

    const instructorGroups = group.instructor
      ? await Group.find({ instructor: group.instructor._id }, 'groupCode location schedule')
      : [];

    res.json({
      group,
      students,
      instructor: group.instructor
        ? {
          ...group.instructor.toObject(),
          groups: instructorGroups,
        }
        : null,
    });
  } catch (err) {
    console.error('Error fetching group details:', err);
    res.status(500).json({ error: 'فشل في تحميل بيانات الجروب' });
  }
});

exports.createGroup = catchError(async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.status(201).json(group);
  } catch (err) {
    console.error('Create group error:', err);
    res.status(400).json({ error: 'فشل في إضافة الجروب', details: err.message });
  }
});

exports.updateGroup = catchError(async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);

    if (!group) return res.status(404).json({ error: 'الجروب غير موجود' });
    group._modifiedBy = req.user?.name || 'system';
    Object.keys(req.body).forEach((key) => {
      group[key] = req.body[key];
    });
    await group.save();
    res.json(group);
  } catch (err) {
    console.error('Update group error:', err);
    res.status(400).json({ error: 'فشل في تعديل الجروب', details: err.message });
  }
});


exports.deleteGroup = catchError(async (req, res) => {
  try {
    const deleted = await Group.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'الجروب غير موجود' });
    res.json({ message: 'تم حذف الجروب بنجاح' });
  } catch (err) {
    console.error('Delete group error:', err);
    res.status(500).json({ error: 'فشل في حذف الجروب' });
  }
});