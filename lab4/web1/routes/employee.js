var express = require('express');
var router = express.Router();

//hiển thị form để nhập liệu (GET)
router.get('/', (req, res) => {
   //render ra file : views/employee/add.hbs
   res.render('employee/add');
})

//nhận & show dữ liệu từ form (POST)
router.post('/', (req, res) => {
   var employee = req.body;
   //render ra file : views/employee/view.hbs
   res.render('employee/view', { employee : employee });
})


module.exports = router;