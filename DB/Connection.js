const mongoose = require('mongoose')

const URL = ""

const connectDB = async() => {
    try{
        // await mongoose.connect(URL)
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected..")
    } catch (error) {
        console.error("Database connection failed:", error.message)
    }
}

module.exports = connectDB;