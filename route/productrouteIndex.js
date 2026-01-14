const router =require('express').Router()
const electronicsroute=require('./electronicsroute')
const {productController}=require('../Controller/productController')
const booksroute=require('./booksroute')
const clothroute=require('./clothing')

router.use('/electronics',electronicsroute)
router.use('/cloth',clothroute)
router.use('/books',booksroute)
router.get('/all',productController)




module.exports=router