const http = require("http")
const getRequest = require("./methods/get")
const deleteRequest= require("./methods/delete")
const postRequest = require("./methods/post")
const defaultRequest= require("./methods/default")


const server =http.createServer((req,res)=>{
    
res.setHeader("content-type", "aplication/json")

switch(req.method){

    case "GET": 
    return getRequest(req,res)
    
    case "POST": 
    return postRequest(req,res)
    
    case "DELETE": 
    return deleteRequest(req,res)
    
    default :
    defaultRequest(req,res)

}

})

const PORT=4090;

server.listen(PORT,()=>{
    console.log(`server ${PORT} portunda çalışmaya başladı`)
})  