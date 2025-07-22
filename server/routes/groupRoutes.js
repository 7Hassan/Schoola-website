const express = require('express');
const router = express.Router();
const ctl = require('../controller/groupCtl');

router.get('/', ctl.getAllGroups);
router.get('/:id', ctl.getGroupById);
router.post('/', ctl.createGroup);
router.put('/:id', ctl.updateGroup);
router.delete('/:id', ctl.deleteGroup);

module.exports = router;
