import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to database");

    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;
