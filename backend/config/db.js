import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const connectDB = await mongoose.connect(process.env.MONGO_URI); // connecting to the mongodb database
       
    } catch (error) {
        response.json({message: "Database connection failed" },{status : 500});
    }
}
export default connectDB;