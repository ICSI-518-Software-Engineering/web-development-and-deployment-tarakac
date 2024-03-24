const mongoose = require('mongoose');
require('dotenv').config();

exports.db = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connection successfull!');
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}