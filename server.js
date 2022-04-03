const express = require('express');
const app = express();

//Setting view engine -- When we write our view code in ejs, 
//and our view engine will convert the ejs code to HTML.

app.set('view engine', 'ejs'); 


app.get('/',(req, res) => {
    res.send('Hello World - 2');
})
app.listen(5050);