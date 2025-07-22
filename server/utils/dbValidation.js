const mongoose = require('mongoose');

const validateDocumentExistence = async (modelName, id) => {
  console.log('🚀 ~ validateDocumentExistence ~ id:', id)
  if (!mongoose.Types.ObjectId.isValid(id)) return false;

  const Model = mongoose.model(modelName);
  const exists = await Model.exists({ _id: id });

  return Boolean(exists);
};

module.exports = {
  validateDocumentExistence,
};
