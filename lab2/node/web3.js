const http = require('http')
const fs = require('fs')

//config port for web deployment
const port = process.env.PORT||3000

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      fs.readFile('index.html', (err, data) => {
         if (err) 
            console.error(err)
         else 
            res.end(data)
      })
   } else if (req.url === '/hello') {
      fs.readFile('hello.html', (err, data) => {
         if (err)
            console.error(err)
         else
            res.end(data)
      })
   } else if (req.url === '/login') {
      fs.readFile('login.html', (err, data) => {
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
   console.log("http://localhost:" + port)
})