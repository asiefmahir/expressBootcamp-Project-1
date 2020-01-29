const axios = require('axios')
const db = require('../utils/db')
const uuid = require('uuid');
// const date = require('date')
const date = require('date-and-time');

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

    let { title, body} = req.body;
    // let date = new Date();
    // let timestamp = date.getTime()
    // const now = new Date();
    // const postDate = date.format(now, 'YYYY/MM/DD hh:mm:ss')

    db.get('posts')
        .push({ id: uuid.v4() ,title, body, postDate: date.format(new Date(), 'YYYY/MM/DD hh:mm:ss') }) // timestamp
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

const editPostArticle = (req, res) =>{
    // res.json(req.body);
    let { title, body} = req.body;
    let newId = req.params.id
    console.log(newId)
    let day = db.get('posts').find({id: req.params.id})
        day.assign({ id: newId, title, body}).write();
    res.redirect('/')    
    // let { title, body} = req.body

    // db.get('posts')
    //     .push({ id: uuid.v4() ,title, body})
    //     .write()
    // res.redirect('/')
}

module.exports = {articleList, create, postArticle, singleArticle, editArticle, editPostArticle}