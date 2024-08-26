const mongoose = require("mongoose");
require("dotenv").config();


const mongoLiveURI =
  process.env.MONGO_URL || "mongodb+srv://moitriHazra:8942898688Moi@cluster0.dzxavsq.mongodb.net/?retryWrites=true&w=majority";


const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoLiveURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};


connectToMongo().catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});


exports.connection = connectToMongo;
