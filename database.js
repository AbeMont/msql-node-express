const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// https://sidorares.github.io/node-mysql2/docs#first-query

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

async function getArticles() {
    const [articles] = await connection.execute('SELECT * FROM articles ORDER BY id DESC');
    return articles;
}

async function getArticleById(id){
    const [article] = await connection.execute('SELECT * FROM articles WHERE id = ?', [id]);
    return article[0];
}

async function createArticle(title, desc_content, content){ 
    const [article] = await connection.execute(`
        INSERT INTO articles (title, desc_content, content) 
        VALUES (?, ?, ?)`, [title, desc_content, content]);
    return article;
}

module.exports = { getArticles, createArticle, getArticleById, connection };
