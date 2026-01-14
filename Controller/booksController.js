const {Books} =require('../model/productmodel')
const booksControllerEntry=async(req,res,next)=>{
    const {productName,
    price,
    details,
    subCategory,
    author,
    isbn}=req.body 

    if(!productName || !price || !details || !subCategory || !author || !isbn){
        return res.status(404).json({message:"please provide all the info"})
    }

    let books =new Books.findOne({['productName']:productName})

    if(books){
        return res.status(404).json({message:"this product already exist"})
    }

    books= new Books(productName,price,details,subCategory,author,isbn)
     await books.save()


}
module.exports={booksControllerEntry}