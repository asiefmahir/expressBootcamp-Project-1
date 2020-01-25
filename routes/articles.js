const Router = require('express').Router()
const { articleList, create, postArticle, singleArticle, editArticle } = require('../controllers/articleController')

Router.get('/', articleList );
Router.get('/create', create  );
Router.post('/edit', editArticle  );
Router.get('/:id', singleArticle );
Router.post('/', postArticle  );




module.exports = Router