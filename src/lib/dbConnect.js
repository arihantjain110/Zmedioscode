// "use server"
import mongoose from "mongoose";

const connection = {};
const maxRetries = 5;
const retryInterval = 2000; // 2 seconds

const connectWithRetry = async (retries) => {
    const MONGODB_URI = process.env.MONGODB_URI;
    try {
        if (connection.isConnected) {
            console.log("Already connected to database.")
            return
        };
        if(!MONGODB_URI){
            throw new Error("MongoDB_URI is not provided");
        }
        
        const db = await mongoose.connect(MONGODB_URI);
        connection.isConnected = db.connections[0].readyState;
        // const db = await mongoose.connect(process.env.MONGODB_URI || '');
        // connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.error(`MongoDB connection error : ${error.message}`);

        if (retries > 0) {
            console.log(`Retrying connection in ${retryInterval / 1000} seconds...`);
            setTimeout(() => connectWithRetry(retries - 1), retryInterval);
        } else {
            console.error("MongoDB connection failed after multiple attempts");
            // Optionally, handle this error as needed for your application,
            // such as sending an alert or terminating the process.
        }
    }
};

export const connectToDB = async () => {
    await connectWithRetry(maxRetries);
};