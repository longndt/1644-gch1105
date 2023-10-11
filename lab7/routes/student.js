var express = require('express');
var router = express.Router();

const StudentModel = require('../models/StudentModel');

// URL : localhost:3001/student
router.get('/', async (req, res) => {
   // SQL : SELECT * FROM student
   var students = await StudentModel.find();
   //res.send(students);
   // render ra file view : views/student/index.hbs và gửi kèm data thông qua biến 'students'
   res.render('student/index', { students: students });
})

module.exports = router;