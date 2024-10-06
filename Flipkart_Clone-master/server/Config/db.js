const mongoose = require("mongoose");
// const {defaultData} = require("../default.js")
require('dotenv').config();
const Connection = async () => {
    try { 
        await mongoose.connect(`${process.env.mongoURL}/${process.env.DATABASE}`, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
        // defaultData()
    } catch(error) {
        console.log('Error: ', error.message);
    }
}
module.exports=Connection