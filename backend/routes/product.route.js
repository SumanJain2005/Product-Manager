import express from 'express';
const router = express.Router();
import {getAllProducts , postProduct , updateProduct , deleteProduct} from "../controllers/product.controller.js"
router.get("/", getAllProducts )
router.post("/", postProduct);
router.put("/:id", updateProduct) 
router.delete("/:id", deleteProduct)
export default router;