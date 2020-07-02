const express = require('express');
const cors = require('cors');
const db = require('mysql');

//Configure Database
const conn = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'arkademy'
  });
   
//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Hello Word!!"
    });
});

function isValidInput(insert){
    return insert.productName && insert.productName.toString().trim() !== '' &&
    insert.productExplaination && insert.productExplaination.toString().trim() !== '' &&
    insert.productPrice && insert.productPrice.toString().trim() !== '' &&
    insert.productTotal && insert.productTotal.toString().trim() !== '';
}

app.post('/input', (req, res)=>{
    if(isValidInput(req.body)){
        const insert = {
            productName: req.body.productName.toString(),
            productExplaination: req.body.productExplaination.toString(),
            productPrice: req.body.productPrice.toString(),
            productTotal: req.body.productTotal.toString()
        };
        console.log(insert);
    }else{
        res.status(442);
        res.json({
            message: "Hey! Isi Data Dengan Benar!"
        });
    }
});


app.listen(5000, ()=>{
    console.log('Listening on http://localhost:5000');
});