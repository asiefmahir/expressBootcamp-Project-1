const axios = require('axios')
const db = require('../utils/db')
const uuid = require('uuid')

const articleList = (req, res) =>{
    let posts = db.get("posts")
    res.render('Articles.index', {posts})
};
const singleArticle = (req, res) =>{
   let singlePost = db.get('posts').find({id: req.params.id})
  res.render('Articles.show', {singlePost: singlePost.toJSON()})
}

const create = (req, res) => {
    res.render('Articles.create')
}

const postArticle = (req, res) =>{
    // res.json(req.body);

    let { title, body} = req.body

    db.get('posts')
        .push({ id: uuid.v4() ,title, body})
        .write()
    res.redirect('/')
}

const editArticle = (req, res) =>{
    
    let editableSinglePost = db.get('posts').find({id: req.params.id})
    res.render('Articles.edit', {editableSinglePost: editableSinglePost.toJSON()})
    // db.get('posts')
    //     .find({id: req.params.id})
    //     .assign({ id: editableSinglePost.id})
    //     .write()
}

module.exports = {articleList, create, postArticle, singleArticle, editArticle}