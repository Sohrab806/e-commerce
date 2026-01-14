const {Schema,model}=require('mongoose')

const userSchema= new Schema({
           
        name:{
            type:String,
            required:true,
            minlength:[3,'minimum 3 charecter needed'],
            maxlength:[30,'you can nit exceed 30 charecter']

        },
        email:{
            type:String,
            required:true,
            validate:{
            validator: function(v){

                return  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
            },message:  (prop)=>`invalid email :${prop.email}`
        },
        },
        password:{
            type:String,
            required:true,
            minlength:[8,'passowrd is to short'],
            maxlength:[90,'passowrd is to long']
        },
        role:{
            type:String,
            enum:['admin','user','Owner'],
            default:'user'
        },
        avaterurl:String,
        address:String,



    },{timestamps:true})

    const User=model('User',userSchema);

module.exports=User