import dotenv from "dotenv"
import { connectDB } from "./db/db.js"
import { app } from "./app.js"

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on PORT : https://localhost:${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log(`MongoDB connection failed !! ${error}`)
})
