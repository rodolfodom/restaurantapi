require("dotenv").config();
const { MongoClient } = require("mongodb");

async function connectDB() {
  try {
    const client = await MongoClient.connect(
      process.env.DATABASE_CONNECTION_STRING,
      { useUnifiedTopology: true }
    );
    const db = client.db("restaurant");
    console.log("Successful database connection");
    return db;
  } catch (err) {
    console.log("Database connection error \n", err);
  }
}

module.exports = connectDB;
