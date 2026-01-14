const router=require('express').Router()
const {booksControllerEntry}=require('../Controller/booksController')

router.post('/entry',booksControllerEntry)

module.exports=router