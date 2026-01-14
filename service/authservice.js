const bcrypt=require('bcrypt')
const jwt =require('jsonwebtoken')
const {findByProperty,creatNewUser}=require('./userService')

const registerService=async({name,email,password})=>{

    let user=await findByProperty('email',email)
    

    if(user){
        const error=new Error('user already exist')
        error.status=409;
         throw error
    }
    
    
    const salt=10
    const hash=await bcrypt.hash(password,salt)
 user=await creatNewUser({name,email,password:hash})
  

 return user.save()

}

const loginService=async({email,password})=>{
  let user= await findByProperty("email",email)

  if(!user){
    const error = new Error('user do not exist')
    error.status=400;
    throw error
  }

  const auth= await bcrypt.compare(password,user.password)
if(!auth){
    const error = new Error('password does not match')
    error.status=404;
    throw error
  }

  const payload={
    _id:user._id,
    name:user.name,
    email:user.email,
    role:user.role
  }
  const expireIn=60*60*2 
  console.log('payload',payload)
   const token = jwt.sign(payload,'secret-key',{expiresIn:expireIn})
   return token
}
module.exports={registerService,loginService}



