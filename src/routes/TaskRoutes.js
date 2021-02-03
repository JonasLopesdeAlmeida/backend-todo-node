const express = require('express');
const router = express.Router();
const TaskValidation = require('../middlewares/TaskValidation');
const TaskController = require('../controller/TaskController');
const MacaddressValidation = require('../middlewares/MacaddressValidation');


router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/:id', TaskController.listone);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

router.get('/filter/all', MacaddressValidation, TaskController.listall);


module.exports = router;