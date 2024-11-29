import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import ProductRoute from "./routes/product.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json()); // it is simply allowing the passing of json data, it is the middleware
app.use("/api/products", ProductRoute ); // simply ei route ta hit korar por sob kota okhane chole jabe in the product route.

app.listen(port, () => { 
    connectDB();
    console.log(`Server started on port ${port}`)
});