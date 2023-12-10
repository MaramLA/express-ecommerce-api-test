const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("database is connectd");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDB;
