const mongoose = require("mongoose");

const connection = {};
const maxRetries = 5;
const retryInterval = 2000; // 2 seconds

const connectWithRetry = async (retries) => {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("MongoDB_URI is not provided");
  }

  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to database.");
      return;
    }

    await mongoose.connect(MONGODB_URI);
    connection.isConnected = mongoose.connection.readyState;
    console.log("Connected to database successfully.");
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);

    if (retries > 0) {
      console.log(`Retrying connection in ${retryInterval / 1000} seconds...`);
      setTimeout(() => connectWithRetry(retries - 1), retryInterval);
    } else {
      console.error("MongoDB connection failed after multiple attempts");
    }
  }
};

module.exports = {
  connectToDB: () => connectWithRetry(maxRetries),
};
