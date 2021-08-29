const DB = require("./index.js")
DB.connect(``).then(async()=>{
    const db = new DB.getDB("test")
    db.delete("test",{name:"c"})
    //db.get("test").then(a=>console.log(a))
})