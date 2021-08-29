const DB = require("./index.js")
const url = ""
DB.connect(url).then(async()=>{
    const db = new DB.getDB("test")
    db.get("test",{name:"Googlefan",character:"lazy"}).then(()=>{
        db.getAll().then(data=>console.log(data))
    })
})