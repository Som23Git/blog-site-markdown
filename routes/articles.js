// All the routes will be available in this file. Example - Show / Edit route

const express = require('express');
const router = express.Router();        // We can use this Router function that we can use to create view and call the same like we do in server.js.

router.get('/new', (req,res) => {
    res.render('articles/new');
});

router.post('/', (req,res) => {

})

module.exports = router;
