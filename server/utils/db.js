const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_series";


const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successfull with the DataBase");
  } catch (error) {
    console.log("Database Connection Failed", error);
    process.exit(0);
  }
};

module.exports = connectDB;
