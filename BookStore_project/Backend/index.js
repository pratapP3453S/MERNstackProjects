import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/Book.route.js'
import cors from 'cors'
import userRoute from './route/User.route.js'

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000
const MongoURI = process.env.MongoURI

try {
  mongoose.connect(MongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('yes connected.')
} catch (error) {
  console.log("error detected : ", error);
}

app.use('/book',bookRoute);
app.use('/user',userRoute);

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`)
})