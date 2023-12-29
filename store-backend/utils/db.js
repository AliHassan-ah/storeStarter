const mongoose = require("mongoose");
const URI = process.env.MONGOBD_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to Mongo Db");
  } catch (error) {
    console.log("Db connection  Failed ", error);
  }
};
module.exports = connectDb;
