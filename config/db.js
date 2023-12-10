const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://lsmrnr6:L7MhQj2pOrZNiqBn@cluster0.xbtcmjt.mongodb.net/full-stack-demo-db"
    );
    console.log("database is connectd");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDB;
