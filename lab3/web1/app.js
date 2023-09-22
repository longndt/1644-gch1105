const http = require('http')
const fs = require('fs')
//const port = 3000;  //default port in NodeJS
const port = process.env.PORT || 3001  //set port for Render
//const server = http.createServer(function (req, res) {})
const server = http.createServer((req, res) => {
   if (req.url === '/') {
      fs.readFile('index.html', (err, data) => {
         if (err)
            console.error(err)
         else
            res.end(data)
      })
   } else if (req.url === '/contact') {
      fs.readFile('contact.html', (err, data) => {
         if (err)
            console.error(err)
         else
            res.end(data)
      })
   } else if (req.url === '/about') {
      fs.readFile('about.html', (err, data) => {
         if (err)
            console.error(err)
         else
            res.end(data)
      })
   } else {
      res.write('<h1>404 - Not Found</h1>')
      res.end()
   }
})
server.listen(port, () => {
   console.log('Server is running at http://localhost:' + port)
})

