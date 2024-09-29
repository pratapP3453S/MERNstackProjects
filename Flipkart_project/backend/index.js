import express from 'express'
import dbconnect from './src/database/db.js';
import dotenv from 'dotenv'
import defaultData from './default.js';
import router from './src/routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();

const Port = 8000;

dotenv.config();
app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', router)

// app.get('/', (req, res)=> {
//     res.send("hello from server")
// })
dbconnect();
defaultData();

app.listen(Port, ()=> {
    console.log(`listining on ${Port}`)
})