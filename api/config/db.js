const mongoose = require("mongoose");
const PATH = "mongodb://localhost:27017/chatAPI";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(PATH);
    console.log("connect mongodb");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongoDB;
