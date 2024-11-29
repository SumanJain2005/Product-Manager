import mongoose from 'mongoose';
import Product from "../model/Product.model.js";
export const getAllProducts = async (req, res) => {
    const ProcductArray  = await Product.find({});
    try {
        res.json(ProcductArray).status(200);    
    } catch (error) {
        console.log(error.message);
        res.json({message: error.message}).status(500);
    }
}
export const postProduct = async (req, res) => {
   
        const product = req.body;
        if(!product.name || !product.price || !product.image || !product.category){
            return res.json(
                {success: false, message: "All fields are required"},
                {status: 400}
            )}
        const newProduct = new Product(product); // creating a new product
        try {
            await newProduct.save(); //saving in the database
            return res.json(
                {success: true, message: "Product added successfully"},
            ).status(201)
        } catch (error) {
            return res.json(
                {success: false, message: "Error saving product"},
            ).status(500)
        }
}
export const updateProduct = async (req, res)=>{
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json(
            {success: false, message: "Invalid id"},
        ).status(404);
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product , {new: true});
        res.json(updatedProduct).status(200);
    } catch (error) {
        res.json({message: error.message}).status(500);
    }
}
export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const count = await Product.findById(id); // this is function which searches for the id passed in params and deletes it.
        if(!count){
            return res.json(
                {success: false, message: "Product not found"},
            ).status(404)
        }
        await Product.findByIdAndDelete(id);
        return res.json(
            {success: true, message: "Product deleted successfully"},
        ).status(200)
    } catch (error) {
        return res.json(
            {success: false, message: "Error deleting product"},
        ).status(500)
    }
}