const router=require('express').Router()
const authroute=require('./authrouter')
const productroute=require("./productrouteIndex")
router.use('/auth',authroute)
router.use('/product',productroute)


module.exports=router