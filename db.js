const mongoose = require('mongoose');
const MONGOURI = process.env.MONGOURI;

const dbConnect = async() =>{
    try{
        console.log(MONGOURI);
       await mongoose.connect(MONGOURI)
       console.log('connection to database is successful!!!')
    }
    catch(err){
        console.log(err);
        console.log('database connection failed');
    }
}

module.exports = dbConnect;