const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const { generateGroupName } = require('../utils/groupHooks');
const { validateDocumentExistence } = require('../utils/dbValidation');
const AppError = require('../Errors/classError').default;
const { trackChanges } = require('../utils/hooks');

const groupSchema = new mongoose.Schema({
  groupCode: { type: String, unique: true, index: true, sparse: true },
  groupName: { type: String },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  status: { type: String, enum: ['open', 'closed', 'completed'], default: 'open', index: true },
  schedule: {
    type: [
      {
        day: { type: String, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
      }
    ],
    required: true,
    validate: {
      validator: function (val) {
        return Array.isArray(val) && val.length > 0;
      },
      message: 'يجب تحديد مواعيد الحصص'
    }
  },
  price: { type: Number, required: true },
  startDate: { type: Date },
  totalSessions: { type: Number, required: true },
  givenSessions: { type: Number, default: 0 },
  notes: { type: String },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instructor',
  },
  changes: [
    {
      field: String,
      oldValue: mongoose.Schema.Types.Mixed,
      newValue: mongoose.Schema.Types.Mixed,
      changedAt: { type: Date, default: Date.now },
      modifiedBy: String,
    },
  ]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

groupSchema.pre('save', async function (next) {
  if (this.isNew && !this.groupCode) {
    this.groupCode = `GRO-${nanoid(6)}`;
  }

  const locationOk = await validateDocumentExistence('Location', this.location);
  if (!locationOk) return next(new AppError('المكان غير موجود', 404));
  if (this.course) {
    const courseOk = await validateDocumentExistence('Course', this.course);
    if (!courseOk) return next(new AppError('الكورس غير موجود', 404));
  }

  if (this.isNew || this.isModified('schedule') || this.isModified('location')) {
    const name = await generateGroupName(this);
    if (name) this.groupName = name;
  }

  if (!this.isNew) {
    await trackChanges(this, ['isCompleted', 'hasStarted']);
  }

  next();
});

groupSchema.virtual('isCompleted').get(function () {
  return this.givenSessions >= this.totalSessions;
});

groupSchema.virtual('studentsCount', {
  ref: 'Student',
  localField: '_id',
  foreignField: 'group',
  count: true,
});

groupSchema.virtual('studentsPaidCount', {
  ref: 'Student',
  localField: '_id',
  foreignField: 'group',
  count: true,
  match: { paid: true },
});

groupSchema.virtual('hasStarted').get(function () {
  return this.startDate <= new Date();
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
