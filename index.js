// Backend challenge

let express = require('express');
let app = express();
let port = process.env.PORT || 3111;
let dotenv = require('dotenv');
dotenv.config();
let cors = require('cors');
let bodyparser = require('body-parser')
let dbConnect = require('./db');

app.use(cors());
app.use(bodyparser.json());

// let link = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';

// let getData = async () => {
//     try {
//         let response = await fetch(link); // Wait for the fetch to complete
//         if (!response.ok) {
//             throw new Error('Network response was not ok.');
//         }
//         let data = await response.json(); // Wait for the JSON parsing to complete
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// getData();

app.get('/get',async(req,res)=>{
    
})

app.listen(port,(err)=>{
    dbConnect();
    if (err) throw err;
    console.log(`server is running on ${port}`);
    
});
