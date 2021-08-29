# @glowutil/mongo
## connecting
```js
const url = //your_database_url
const DB = require("@glowutil/mongo")
DB.connect(url).then(async()=>{
    const db = new DB.getDB("test")
})
```
## usage
- set
```js
db.set("test",{name:"a"})
```
- get
```js
db.get("test").then(data=>{
    console.log(data)
})
//{name:"a"}
```
- delete
```js
db.delete("test")
```