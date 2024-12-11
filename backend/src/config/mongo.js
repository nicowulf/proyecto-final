import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

process.loadEnvFile()

const URI_DB = process.env.URI_DB

const connectDB = async () => {
    try {
        await mongoose.connect(URI_DB)
        console.log("Succesfully connected to DB")
    } catch (error) {
        console.log("DB connection failed: " + error)        
    }
}

export { connectDB }