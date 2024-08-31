const mongoose = require("mongoose");
const MongoURL = require("../configs/LocalConfigs");
const connectDB = async () => {
  try {
    await mongoose.connect(MongoURL);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
