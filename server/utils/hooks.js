const catchError = require('../Errors/catch');

const trackChanges = catchError(async (doc, ignoreFields = []) => {
  const defaultIgnore = ['changes', '_id', 'id', '__v', 'createdAt', 'updatedAt'];

  const fieldsToIgnore = [...new Set([...defaultIgnore, ...ignoreFields])];

  const existing = await doc.constructor.findById(doc._id).lean();
  if (!existing) return;

  const currentObj = doc.toObject({ virtuals: false });
  const fields = Object.keys(currentObj);

  for (let field of fields) {
    if (
      !fieldsToIgnore.includes(field) &&
      JSON.stringify(currentObj[field]) !== JSON.stringify(existing[field])
    ) {
      doc.changes = doc.changes || [];
      doc.changes.push({
        field,
        oldValue: existing[field],
        newValue: currentObj[field],
        changedAt: new Date(),
        modifiedBy: doc._modifiedBy || 'system',
      });
    }
  }
});

module.exports = { trackChanges };
