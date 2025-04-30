CREATE DATABASE Markdown_Blog;
USE Markdown_Blog;

CREATE TABLE articles (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    content TEXT NOT NULL
);

INSERT INTO articles (title, content) VALUES ('First Article', "First article description"), ('Second Article', "Second article description");

SELECT * FROM articles;
