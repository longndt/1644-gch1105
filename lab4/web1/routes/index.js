var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/main', function(req, res, next) {
  res.render('index');
});

/* display login form (GET method) : homepage */
router.get('/', (req, res) => {
  res.render('login');
})

/* process login form (POST method) */
router.post('/login' , (req, res) => {
  //get input data
  var data = req.body;

  //validate login information
  var username = data.username;
  var password = data.password;
  var message = null;
  if (username == "admin" && password == "123456") {
    //res.send("<h1 style='background-color:yellow; color: red';>Login succeed !</h1>");
    //message = "Login succeed !";
    //redirect page to main page after login succeed
    res.redirect('/main');
  } else {
    //res.send("<h1 style='background-color:yellow; color: red';>Login failed !</h1>");
   // message = "Login failed !";
   //redirect page to login page after login failed
    res.redirect('/');
  }
  
  //res.render('result', { message: message });
  // console.log (data);
  // res.send(data);
})


module.exports = router;
