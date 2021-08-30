# mongo-glow
## connecting
```js
const uri = //your_database_uri
const DB = require("mongo-glow")
DB.connect(uri).then(async()=>{
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
- getByIndex
```js
db.getByIndex("test")
```
you may know what an index is from [here]("#index")
- getAll
```js
db.getAll().then(data=>console.log(data))
//Map(2) { 'test' => 'a', 'help' => 'ping' }
```
## index
index is a keyword for finding datas.
for example, you've setted a data by;
```js
db.set("test","value")
```
than you can get this either by
```js
db.get("test")
```
or by
```js
db.getByIndex("value")
```
indexes are automaticly made when the value is a type of string or a number.
otherwise please make an index by
```js
db.set("test",{name:"a",id:114514},"a")
```
