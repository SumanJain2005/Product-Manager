import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database connected to ${connection.connection.host}`);
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit the process if the database connection fails
    }
};

export default connectDB;