const mongoose=require('mongoose')

function connectdb(str){
    return mongoose.connect(str,{serverSelectionTimeoutMS:1000})
}

module.exports=connectdb