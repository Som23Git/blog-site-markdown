const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');

//Setting view engine -- When we write our view code in ejs, 
//and our view engine will convert the ejs code to HTML.

app.set('view engine', 'ejs'); 

app.use('/articles', articleRouter);


app.get('/',(req, res) => {
    // res.send('Hello World - 2');
    const articles = [{
        title: 'test article',
        createdAt:Date.now(),
        description: 'Test Description'
    }];
    res.render('index', {articles: articles});       // Instead of getting the response now, we can pass the path to the view we wanted to display and it is index.ejs
})
app.listen(5050);