import mongoose from "mongoose";

const connectDB = async () => {
    try{
      await mongoose.connect("")
    }catch(err){
      console.log("Database is not connected")
    } 
}

export default connectDB;