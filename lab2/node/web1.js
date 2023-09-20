const http = require('http')
const host = 'localhost'
const port = 3000
const server = http.createServer((req, res) => {
   res.write('<h1>1644</h1>')
   res.write('<h2>Cloud Computing</h2>')
   res.write('<h3>Greenwich Vietnam</h3>')
   res.write('<h4>GCH1105</h4>')
   res.end()
})
server.listen(port, () => {
   console.log('Server is running at http://' + host + ":" + port)
})