const productModel = require("../models/product.model");


const productController = {
    getData : async(req,res)=>{
        try{
            const data =await productModel.find();
             return res.status(200).send({message:"data get success", data})            
        }
        catch(err){
            return res.status(500).send({message:"something went wrong", err}) 
        }
    },
    postData : async(req,res)=>{
        try {
            const data =await productModel.create(req.body);
            return res.status(200).send({message:"data post success", data}) 
        } catch (error) {
            return res.status(500).send({message:"something went wrong", err}) 
        }
    }
}


module.exports = productController;