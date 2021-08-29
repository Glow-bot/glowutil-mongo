const mongo = require("mongoose")
module.exports = {
    connect: async function(url){
        if(!url)return("url is required")
        await mongo.connect(url).catch((error)=>{
            return console.log(error)
        })
        this.url = url
        this.getDB = class{
            constructor(name){
                this.schema = new mongo.Schema({
                    name: String,
                    type: String,
                    value: String,
                    indexKey: String
                }),
                this.name = name
                this.model = mongo.model(this.name, this.schema)
            }
            async set(name,value,indexKey){
                    if(typeof(name) !== "string")throw new Error("key must be a string")
                    const data = await this.dget(name) || new this.model()
                    if(typeof(data.value) === "string"){
                        data.name = name
                        data.value = value
                        data.indexKey = value
                    }else if(typeof(data.value) === "number"){
                        data.name = name
                        data.value = String(value)
                        data.indexKey = String(value)
                    }else{
                        data.name = String(name)
                        data.value = JSON.stringify(value)
                        data.indexKey = indexKey
                    }
                    data.save()
            }
            async dget(name){
                const data = await this.model.findOne({name:name})
                return data
            }
            async get(name){
                const data = await this.dget(name)
                if(!data)return null
                return JSON.parse(data.value)
            }
            async delete(name){
                const data = await this.dget(name)
                if(!data)return null
                data.remove()
            }
            async dgetByIndex(name){
                const data = await this.model.findOne({indexKey:name})
                return data
            }
            async getByIndex(name){
                const data = await this.dgetByIndex(name)
                if(!data)return null
                return JSON.parse(data.value)
            }
            async getAll(){
                const data = await this.model.find({})
                const map = new Map()
                data.map(a=>{
                    map.set(a.name,JSON.parse(a.value))
                })
                return map
            }
        }
    },
}