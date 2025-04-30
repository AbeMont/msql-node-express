const express = require('express');
const articleRouter = require('./routes/articles');
const bodyparser = require('body-parser');
const {getArticles} = require('./database');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", async (req,res)=>{
    const articles = await getArticles();
    console.log(articles);
    res.render('./articles/index', {articles: articles});
});

app.use('/articles', articleRouter);

app.listen(5000); 