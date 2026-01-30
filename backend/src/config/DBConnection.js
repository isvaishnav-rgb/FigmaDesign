import mongoose from "mongoose";

const connectDB = async () => {
    try{
      await mongoose.connect(process.env.MONGODB_URL)
      console.log("Database is connected successfully")
    }catch(err){
      console.log("Database is not connected,", err.message)
    } 
}

export default connectDB;