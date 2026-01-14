const jwt=require('jsonwebtoken')
const User=require('../model/usermodel')

const middleware=async(req,res,next)=>{
    try{
let token=req.headers.authorization

    if(!token){ 
         return res.status(404).json({message:"Your are not authorize"})
    }
console.log('token with barer',token)
     token=token.split(' ')[1]
     console.log('token ::',token)
     const decoded=await jwt.verify(token,'secret-key')
     const user= await User.findById(decoded._id)
     if(!user){
        return res.status(404).json({message:"user not exist"})
     }
      req.user=user 
      console.log('user ',user)
      next()
    }catch(e){
        return res.status(404).json({message:"token not valid"})
    }
    
   

}

module.exports=middleware