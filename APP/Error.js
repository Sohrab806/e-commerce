const notfoundError=(_req,res,next)=>{
    const error= new Error('server is not responding')
    error.status=404
    next(error)

}

const foundError=(error,_req,res)=>{
   if(error.status){
   return res.status(error.status).json({message:error.message})
   }
   return res.status(500).json({message:"server not found"})
}

module.exports={notfoundError,foundError}