// 引入 library
const express = require('express');
// 引入DB
const db = require('./db');
// express 引入的是一個 function
const app = express();
// 建立一個不易產生衝突的 port 用來測試
// const port = 5001;
const port = process.env.PORT || 5001;

// import controller
const clientsController = require('./Controllers/clients')

// 設定view engine
app.set('view engine', 'ejs');

// 如何處理不同的 request，參數分別為 url 和要執行的 function
// app.get('/', (req, res) => {
//   res.send('hello world!')
// })

const clients = ['Amily','Harry','Clarie']

// 可直接使用 controller 的方法拿取資料和進行 render
app.get('/clients',clientsController.getAll)

app.get('/clients/:id', clientsController.get)

app.get('/', (req, res) => {
  res.send('index')
})

app.get('/hello', (req, res) => {
  res.render('hello')
})

app.get('/bye', (req, res) => {
  res.send('bye!')
})

// 運行這個 port，參數分別為 port 和要執行的 function
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

