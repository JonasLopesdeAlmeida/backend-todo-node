const express = require('express');
const router = express.Router();
const TaskValidation = require('../middlewares/TaskValidation');
const TaskController = require('../controller/TaskController');



router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/:id', TaskController.listone);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);
router.get('/filter/late/:macaddress' ,TaskController.late);
router.get('/filter/today/:macaddress' ,TaskController.today);
router.get('/filter/week/:macaddress', TaskController.week);
router.get('/filter/month/:macaddress', TaskController.month);
router.get('/filter/year/:macaddress', TaskController.year);

router.get('/filter/all/:macaddress',  TaskController.listall);


module.exports = router;