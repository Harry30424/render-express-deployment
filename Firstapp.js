//透過http模組啟動web server服務
const http = require('http') 

const server = http.createServer(function (req, res) {
  //設定回應為text文件，並回應 Hello World!
  res.writeHead(200,{'Content-Type':'text/plain'})
  res.end('Hello World!')
})

//設定服務監聽localhost:3000(127.0.0.1/:3000)
server.listen('5001', function () {  
  console.log('server start on 50001 port')
})