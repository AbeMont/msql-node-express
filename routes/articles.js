const express = require('express');
const { createArticle, getArticleById, deleteById, editArticle } = require('./../database');
const router = express.Router();

router.get('/new', (req, res)=>{
    const newArticle = {
        title: '',
        desc_content: '',
        content: ''
    }
    res.render('articles/new', { article: newArticle});
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

router.delete('/deleteArticle/:id', async (req, res) => {
    await deleteById(req.params.id);
    res.redirect('/');
});

router.get('/editArticle/:id', async (req, res) => {
    const article = await getArticleById(req.params.id);
    res.render('articles/edit', { article: article });
});

router.put('/editArticle/:id', async (req, res) => {
    const editedArticle = req.body;
    const articleId = req.params.id;
    await editArticle(editedArticle, articleId);
    res.redirect(`/articles/article/${articleId}`);
});

router.get('/test', (req, res)=>{
    res.send("here is a test")
})

module.exports = router;