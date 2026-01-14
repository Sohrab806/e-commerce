const User=require('../model/usermodel')

const findByProperty=(key,value)=>{
    

    if(key=='id'){
        return User.findById(value)
    }
       
    return User.findOne({[key]:value})

}

const creatNewUser=({name,email,password})=>{
    
    return new User({name,email,password})

}

module.exports={findByProperty,creatNewUser}