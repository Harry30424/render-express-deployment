//const clients = ['Amily','Harry','Clarie']
const db = require('../db');

// create clients Model Component, define getAll(), get()
const clientsModel = {
    getAll: (cb)=>{
        db.query('SELECT * FROM duty', (err, results) => {
            if (err) return cb(err);
             // cb: 第一個參數為是否有錯誤，沒有的話就是 null，第二個才是結果
            cb(null,results)
        })
        //return clients
    },
    get: (id, cb) => {
        db.query('SELECT * FROM duty WHERE id = ?', [id], (err, results) => {
            if (err) return cb(err);
            cb(null,results)
        })
        //return clients[id]
    }
}

module.exports = clientsModel