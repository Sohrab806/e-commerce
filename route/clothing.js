const router=require('express').Router()
const {clothControllerEntry}=require('../Controller/clothingController')

router.post('/entry',clothControllerEntry)

module.exports=router