const express = require('express');
const { createArticle, getArticleById } = require('./../database');
const router = express.Router();

router.get('/new', (req, res)=>{
    res.render('articles/new');
});

router.post('/createArticle', async (req, res)=>{
    const { title, desc_content, content } = req.body;
    const createdArticle = await createArticle(title, desc_content, content);
    res.redirect(`article/${createdArticle.insertId}`);
});

router.get('/article/:id',async (req, res)=>{
    const article = await getArticleById(req.params.id);
    res.render('articles/article', { article: article });
});

router.get('/test', (req, res)=>{
    res.send("here is a test")
})

module.exports = router;