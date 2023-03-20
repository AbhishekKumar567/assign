const Product = require("../models/productModel")

const addProduct = async (req,res) =>{
    
   
    try{
       
       const product = await Product.create(req.body)
       console.log(product)

        res.status(201).json({
            success:true,
            product,
           
        })

    }
    catch(err){
       // console.log(err)
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}


const getProducts = async (req,res) =>{
    
   
    try{
       
       const product = await Product.find({})
       // console.log(product)

        res.status(200).json({
            success:true,
            product,
           
        })

    }
    catch(err){
       // console.log(err)
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}



const getFeaturedProducts = async (req,res) =>{
    
   
    try{
       
       const product = await Product.find({Featured:true})
       // console.log(product)

        res.status(200).json({
            success:true,
            product,
           
        })

    }
    catch(err){
       // console.log(err)
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}

const updateProduct = async (req,res) =>{
    
    try{

        let product = Product.findById(req.params.id)

        if(!product)
        {
            return res.status(400).json({
                success:false,
                message:"product not found"
            })
        }
       
        product = await Product.findByIdAndUpdate(req.params.id,req.body,
        {
        new: true,
        runValidators: true,
        useFindAndModify: false
        })
        
       // console.log(product)

        res.status(200).json({
            success:true,
            product,
           
        })

    }
    catch(err){
       // console.log(err)
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}


const deleteProduct = async(req,res) =>{

    try
    {
        const product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    await Product.deleteOne()

    res.status(200).json({
        success: true,
        message: "Product Deleted Successfully"
    })

    }
    catch(err)
    {
         // console.log(err)
         res.status(500).json({
            success:false,
            message:err.message
        })
    }
   
}



const lessValueProducts = async (req,res) =>{
    
   
    try{
       
       const product = await Product.find({Price:{$lt:5000}})
       // console.log(product)

        res.status(200).json({
            success:true,
            product,
           
        })

    }
    catch(err){
       // console.log(err)
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}


const ratedProducts = async (req,res) =>{
    
   
    try{
       
       const product = await Product.find({Rating:{$gt:2.5}})
       // console.log(product)

        res.status(200).json({
            success:true,
            product,
           
        })

    }
    catch(err){
       // console.log(err)
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}

module.exports = {addProduct,getProducts,updateProduct,deleteProduct,getFeaturedProducts,lessValueProducts,ratedProducts}


