const express = require('express');
const router = express.Router();
const ctl = require('../controller/studentCtl');

router.get('/search', ctl.searchStudents);
router.get('/', ctl.getAllStudents);
router.post('/', ctl.upsertStudent);
router.post('/many', ctl.createStudent);
router.get('/:id', ctl.getStudentById);
// router.put('/:id', ctl.updateStudent);
router.delete('/', ctl.deleteAllStudents);
router.delete('/:id', ctl.deleteStudent);

module.exports = router;
