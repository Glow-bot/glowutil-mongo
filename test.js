const DB = require("./index.js")
const url = ""
DB.connect(url).then(async()=>{
    const db = new DB.getDB("test")
    db.set("test",{"name":"a"})
})