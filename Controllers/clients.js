//from clients model import clients data
const clientsModel = require('../Models/clients')

const clientsController = {
  getAll: (req, res) => {
    // 改成 callback 非同步操作
    clientsModel.getAll((err, results) => {
      // 如果有 err 就印出錯誤訊息
      if (err) return console.log(err);
      // 不然就把 todos 傳給 view
      res.render('clients', {
        clients: results
      })
    })
  },

  get: (req, res) => {
    const id = req.params.id
    clientsModel.get(id, (err, results) => {
      if (err) return console.log(err);
      res.render('clients', {
        // 注意回傳的結果 array，必須取 results[0] 才會是一個 todo
        clients: results[0]
      })
    })
  }
}

module.exports = clientsController