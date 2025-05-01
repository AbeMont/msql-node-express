const express = require('express');
const articleRouter = require('./routes/articles');
const bodyparser = require('body-parser');
const methodOverride = require('method-override');
const {getArticles} = require('./database');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
// since form methods only allow POST & GET, methodOverride allows us to override methods where we
// can use DELETE or PUT
app.use(methodOverride('_method'));

app.get("/", async (req,res)=>{
    const articles = await getArticles();
    console.log(articles);
    res.render('./articles/index', {articles: articles});
});

app.use('/articles', articleRouter);

app.listen(5000); 