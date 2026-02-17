import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, ".env") });	



const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
