const Router = require('express').Router()
const { articleList, create, postArticle, singleArticle, editArticle, editPostArticle } = require('../controllers/articleController')

Router.get('/', articleList );
Router.get('/create', create  );
Router.get('/:id', singleArticle );
Router.get('/:id/edit', editArticle  );

Router.post('/', postArticle  );
Router.put('/', editPostArticle)




module.exports = Router