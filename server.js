const http=require('http')
const app=require('./APP/app')
const connectdb=require('./db/db')
const server=http.createServer(app)

const PORT=process.env.PORT ||8081


connectdb('mongodb://127.0.0.1:27017/e-commerce').then(()=>{
    server.listen(8080,()=>{
        console.log(`server is listed at port :${PORT}`)
    
    })
    
} ).catch(e=>{
    console.log(e)
})