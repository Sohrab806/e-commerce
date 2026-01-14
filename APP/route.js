const router=require('express').Router()

router.get('/health',(_req,res)=>{

    console.log('router is working')
    return res.status(200).json({message:'health checking.....  Route is working '})

})

module.exports=router