const router=require('express').Router()
const {electronicsControllerAll,electronicsList}=require('../Controller/electronicsController')
// router.get('/all')
router.post('/entry',electronicsControllerAll)
router.get('/list',electronicsList)


module.exports=router