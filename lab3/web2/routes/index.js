var express = require('express');
var router = express.Router();

// URL : localhost:3000
router.get('/', (req, res) => {
   res.write("<h1>Hello world</h1>")
   res.write("<h2>We are learning ExpressJS</h2>")
   res.end()
})

// URL : localhost:3000/greenwich
router.get('/greenwich', (req, res) => {
   res.write("<h1>University of Greenwich (Vietnam)</h1>")
   res.write("<h2>2 Pham Van Bach - Cau Giay - Ha Noi</h2>")
   res.end()
})

module.exports = router;
