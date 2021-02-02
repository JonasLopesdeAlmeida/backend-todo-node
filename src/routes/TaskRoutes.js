const express = require('express');
const router = express.Router();
const TaskValidation = require('../middlewares/TaskValidation');
const TaskController = require('../controller/TaskController');


router.post('/',TaskValidation, TaskController.create);

module.exports = router;