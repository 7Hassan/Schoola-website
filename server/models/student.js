const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const { trackChanges } = require('../utils/hooks');
const { validateDocumentExistence } = require('../utils/dbValidation');
const AppError = require('../Errors/classError').default;

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true, unique: true },
  studentCode: {
    type: String,
    unique: true,
    sparse: true,
  },
  age: { type: Number, required: true },
  parentPhone: { type: String, required: true, index: true },
  email: { type: String },
  status: {
    type: String,
    enum: ['active', 'archive', 'free-day', 'waiting'],
    default: 'waiting',
    required: true,
  },
  source: { type: String },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    index: true,
  },
  paid: {
    type: String,
    enum: ['paid', 'unpaid'],
    default: 'unpaid'
  }, info: { type: String },
  changes: [
    {
      field: { type: String },
      oldValue: mongoose.Schema.Types.Mixed,
      newValue: mongoose.Schema.Types.Mixed,
      changedAt: { type: Date, default: Date.now },
      modifiedBy: { type: String, default: 'system' },
    },
  ],
}, {
  timestamps: true,
});

studentSchema.pre('save', async function (next) {
  if (this.isNew && !this.studentCode) {
    this.studentCode = `STU-${nanoid(6)}`;
  }

  if (this.group) {
    const groupExists = await validateDocumentExistence('Group', this.group);
    if (!groupExists) return next(new AppError('الجروب المحدد غير موجود', 404));
  }

  if (!this.isNew) {
    await trackChanges(this, ['changes']);
  }

  next();
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
