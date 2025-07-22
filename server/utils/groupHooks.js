const mongoose = require('mongoose');
const catchError = require('../Errors/catch');

const generateGroupName = catchError(async (group) => {
  const Location = mongoose.model('Location');
  const locationDoc = await Location.findById(group.location).lean();
  const scheduleStrings = group.schedule.map((s) => `${s.day} (${s.startTime})`).join(' - ');
  return `مجموعة: ${locationDoc.name}، ${scheduleStrings}`;
})


module.exports = {
  generateGroupName
};
