var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fpt', (req,res) => {
  var fpt = "FPT";
  var year = 2023;
  var football = ["manchester city", "manchester united", "chelsea", "liverpool", "barcelona", "real madrid"];
  var images = ['mc.png', 'mu.png', 'chelsea.png'];
  res.render('fpthanoi', 
  { 
    fpt : "FPT Hanoi",
    year : year,
    clubs : football,
    logos : images
  }
  );
})

module.exports = router;
