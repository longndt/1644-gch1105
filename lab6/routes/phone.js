var express = require('express');
var router = express.Router();
var PhoneModel = require('../models/PhoneModel');

// URL: localhost:3000/phone
router.get('/', async (req, res) => {
   //lấy dữ liệu từ collection smartphone
   //và lưu vào biến phones (type : array)
   //SQL: SELECT * FROM smartphone;
   var phones = await PhoneModel.find();
   //console.log(phones);
   //res.send(phones);
   //render ra file view (views/phone/index.hbs)
    res.render('phone/index', { phoneList : phones })
})

router.get('/list', async(req, res) => {
    var phones = await PhoneModel.find();
    res.render('phone/list', { phones : phones } )
})

router.get('/detail/:id', async (req, res) => {
    var phone = await PhoneModel.findById(req.params.id)
    //res.send(phone)
    res.render('phone/detail', { phone : phone})
})

router.post('/cart', async (req, res) => {
    var id = req.body.id;
    var quantity = req.body.quantity;
    // console.log('Phone id: ' + id);
    // console.log('Order quantity :' + quantity);
    var phone = await PhoneModel.findById(id);
    res.render('phone/cart', { phone: phone, quantity : quantity })
})

module.exports = router;