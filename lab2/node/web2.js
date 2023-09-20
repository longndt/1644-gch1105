const http = require('http')
const fs = require('fs')   //fs: file system
const { Console } = require('console')
const server = http.createServer((req, res) => {
   //read html file using fs module
   fs.readFile('demo.html', (err, data) => {
      //case 1: read file error 
      if (err) {
         console.log("read file error")  //display basic error info
         console.error(err)              //display detail error info
      } 
      //case 2: read file succeed
      else {
         res.write(data)
         res.end()
      }
   })
})
server.listen(3000, () => {
   console.log("http://localhost:3000")
})