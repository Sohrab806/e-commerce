const {Cloth} =require('../model/productmodel')
const clothControllerEntry=async(req,res,next)=>{
    const {productName,
    price,
    details,
    subCategory,
    size,
    material,
    color}=req.body 

    if(!productName || !price || !details || !subCategory || !size || !material || !color){
        return res.status(404).json({message:"please provide all the info"})
    }

    let books =new Cloth.findOne({['productName']:productName})

    if(books){
        return res.status(404).json({message:"this product already exist"})
    }

    books= new Cloth(productName,price,details,subCategory,size,material,color)
     await books.save()


}
module.exports={clothControllerEntry}