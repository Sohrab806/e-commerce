const router=require('express').Router()
const {registerController,loginController,userController,singleUserController}=require('../Controller/authController')
const middleware=require('../middlware/middleware')

router.post('/register',registerController)
router.post('/login',loginController)
router.get('/user',userController)
router.get('/me',middleware,singleUserController)

module.exports=router