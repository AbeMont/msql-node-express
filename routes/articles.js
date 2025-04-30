const express = require('express');
const { connection, createArticle } = require('./../database');
const router = express.Router();

// express.json();

router.get('/new', (req, res)=>{
    res.render('articles/new');
});

router.post('/createArticle', async (req, res)=>{
    const { title, desc_content, content } = req.body;
    const createdArticle = await createArticle(title, desc_content, content);
    res.status(200).send(createdArticle);
});

router.get('article/:id', (req, res)=>{

});

router.get('/test', (req, res)=>{
    res.send("here is a test")
})

module.exports = router;