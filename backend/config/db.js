import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connect Successfully!!!')
    } catch (err) {
        console.log('Connect Error')
    }
}

export default connectDb
