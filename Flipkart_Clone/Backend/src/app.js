import express from "express"
import userRouter from "./routers/user.router.js";
import cors from "cors"
import cookieParser from "cookie-parser"
import { errorHandler } from "./utils/errorHandler.js";

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// app.use(errorHandler)

//router imports
app.use('/api/v1/users', userRouter)
//http://localhost:8080/api/v1/users/signup

export { app }