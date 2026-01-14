const {Product,Electronics,Books}=require('../model/productmodel')
const productController=async(req,res,next)=>{
    const productAll= await Product.find()
    return res.status(200).json({message:"all product",productAll})
         
}

module.exports={productController}