var express = require('express');
var router = express.Router();
var StudentModel = require('../models/StudentModel');

router.get('/', async (req, res) => {
   var students = await StudentModel.find({});
   res.send(students); //trả về API chứa student data
})

module.exports = router;
