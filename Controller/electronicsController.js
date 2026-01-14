const {Electronics}=require('../model/productmodel')

const electronicsControllerAll=async(req,res,next)=>{
  try{

    const { productName,price,details,productImage,subCategory, brand,model,warrantyPeriod } = req.body 
 

if( !productName || !price || !details ||  !productImage || !subCategory || !brand || !model || !warrantyPeriod ){
      
    return res.status(400).jason({message:"fill up all the info"})
}

    let electro= await Electronics.findOne({['productName']:productName})
    if(electro){
        return res.status(400).json({message:'product already exist'})
    }
     electro= new Electronics({productName,price,details,productImage,subCategory, brand,model,warrantyPeriod})

     await electro.save()

     return res.status(200).json({message:"success",electro})
// const product = new Electronics(req.body);
//     await product.save();
//     res.status(200).json({message:"success"
//     });


  }catch(e){
    next(e)
  }
}

const electronicsList=async(_req,res,next)=>{

    try{

        const electro=await Electronics.find()
        console.log(electro)
        return res.status(200).json({message:" here all the data",electro})
    }catch(e){
  next(e)
    }

}

module.exports={electronicsControllerAll,
    electronicsList}