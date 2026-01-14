require('dotenv').config('../.env')
const express=require('express')
const app=express();

const healthRoute=require('./route')
const middleware=require('./middlware')
const {notfoundError,foundError}=require('./Error')
const routes=require('../route/routeIndex')
app.use(middleware)

app.use(healthRoute)
app.use(routes)


app.use(notfoundError)
app.use(foundError)
module.exports=app