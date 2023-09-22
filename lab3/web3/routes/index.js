//1. khai báo express
const express = require('express')
//2. khai báo router (controller)
const router = express.Router()

//render ra trang homepage (views/index.hbs)
//url: localhost:3000
router.get('/', (req, res) => {
  res.render('index')
})

//render ra trang login (views/login.hbs)
//url: localhost:3000/login
router.get('/login', (req, res) => {
  res.render('login')
})

//render ra trang contact (views/contact.hbs)
//url: localhost:3000/contact
router.get('/contact', (req, res) => {
  res.render('contact')
})

router.get('/demo', (req, res) => {
  //gửi data từ BE sang FE
  var year = 2023 
  var country = "Vietnam"
  var grade = 7.6
  var music = ['pop', 'jazz', 'rock', 'R&B']
  var movie = ["action", "horror", "comedy", "scifi"]
  var country = ["vietnam", "thailand", "singapore", "malaysia"]
  res.render('demo',
  { 
    nam : year,
    country : country,
    university : "Greenwich Vietnam",
    grade : grade,
    music : music,
    movie : movie,
    country: country
  })
})

//3. export module router
module.exports = router

