const Location = require('../models/location');
const catchError = require('../Errors/catch');

exports.getAllLocations = catchError(async (req, res) => {
  const locations = await Location.find().sort({ createdAt: -1 });
  res.json(locations);
});

exports.getLocationById = catchError(async (req, res) => {
  const location = await Location.findById(req.params.id);
  if (!location) return res.status(404).json({ error: 'المكان غير موجود' });
  res.json(location);
});

exports.createLocation = catchError(async (req, res) => {
  const location = await Location.create(req.body);
  res.status(201).json(location);
});

exports.updateLocation = catchError(async (req, res) => {
  const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!location) return res.status(404).json({ error: 'المكان غير موجود' });
  res.json(location);
});

exports.deleteLocation = catchError(async (req, res) => {
  const location = await Location.findByIdAndDelete(req.params.id);
  if (!location) return res.status(404).json({ error: 'المكان غير موجود' });
  res.json({ message: 'تم حذف المكان بنجاح' });
});
