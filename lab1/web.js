//1. khai báo module (library) http
const http = require('http')
//2. khai báo host (server)
const host = 'localhost'
//3. khai báo port (cổng) của server
const port = 1234     //3000: default port of NodeJS
//4. khởi tạo server
const server = http.createServer((request, respond) => {
   respond.write("<h1 style='background-color: blue;'>Hello world</h1>")
   respond.write("<i>Demo NodeJS web server</i><br/>")
   respond.write("<h2 style='color: red;'>Today is Friday</h2>")
   respond.write("<a href='https://greenwich.edu.vn/'><img src='https://greenwich.edu.vn/wp-content/uploads/2022/10/Welcome-1.jpg' width='80%' height='80%'></a>")
   respond.write("<h6>Greenwich VN Campuses: </h6>")
   respond.write("<ul>")
   respond.write("<li>Hanoi</li>")
   respond.write("<li>HCM City</li>")
   respond.write("<li>Da Nang</li>")
   respond.write("<li>Can Tho</li>")
   respond.write("</ul>")
   respond.end()
})
//5. chạy server bằng cách listen port
server.listen(port, () => {
   console.log("Server is running at http://" + host + ":" + port)
})