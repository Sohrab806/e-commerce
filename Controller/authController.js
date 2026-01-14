const User=require('../model/usermodel')
const {registerService}=require('../service/authservice')
const {loginService}=require('../service/authservice')
const registerController=async(req,res,next)=>{
    try{
        const {name,email,password}=req.body
        

        if(!name || !email || !password){
            return res.status(404).json({message:'please fill up all info'})
        }
           
        const user=await registerService({name,email,password})
         
          return res.status(200).json({message:"Register successfull for ",user})
    }catch(e){
         next(e)
    }

}

const loginController=async(req,res,next)=>{
    try{
        const {email,password}=req.body
        if( !email || !password){
            return res.status(404).json({message:"please fillup all the info"})
        }

         const userToken= await loginService({email,password})
         const expireIn=60*60*2
         console.log('here')
          console.log('usertoken',userToken)

         return res.status(200).json({message:"login success",userToken,expireIn})
            

    }catch(e){
        next(e)
    }
}

const userController=async(_req,res,next)=>{
    try{
      const user=await User.find().select('name email')
      
      res.status(200).json({message:"success",user})
    }catch(e){
        next(e)
    }

}

const singleUserController=async(req,res,next)=>{
    const user= req.user
    
    if(!user){
    return res.status(404).json({message:"you are not authorize"})
    }
    console.log(user)

    return res.status(200).json({message:"users info",user})

}

module.exports={registerController,loginController,userController,singleUserController}