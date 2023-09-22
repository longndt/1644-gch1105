var express = require('express');
var router = express.Router();

// URL : localhost:3000/users
router.get('/', (req, res) => {
  res.send("<h1>This is user list page</h1>")
})

// URL : localhost:3000/users/fpt
router.get('/fpt', (req, res) => {
  res.send("<h1>This is FPT user</h1>")
})

module.exports = router;
