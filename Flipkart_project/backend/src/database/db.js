import mongoose from "mongoose";

const dbconnect = async () => {
   try {
    await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log("connected")
    // .then(console.log("db connected succefully"))
    // .catch(console.log("connection error"))
   } catch (error) {
    console.log("mongodb connection error: ",error)
   }
}
export default dbconnect