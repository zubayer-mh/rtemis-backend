require("dotenv").config();
const mongoose = require("mongoose")
const connectionString = process.env.ATLAS_URI || "";

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString);
    } catch (e) {
        console.error(e);
    }
}

module.exports = { connectDB }