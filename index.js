const express = require('express');
const fs = require('fs');
const axios = require('axios');
const articleRoutes = require('./routes/articles');
const pages = require('./routes/pages');
const articleController = require('./controllers/articleController')
const db = require('./utils/db')


const app = express();

const { config, engine } = require('express-edge');
// Configure Edge if need to
config({ cache: process.env.NODE_ENV === 'production' });
// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/views`);

app.use(express.static('public'))

let PORT = process.env.PORT || 3000;

// app.get('/', (req, res) =>{
//     // res.json({
//     //     name: 'Mahir',
//     //     age: 20
//     // })
//     let html= fs.readFileSync('./test.html', 'utf-8')

//     res.send(html)
// });

const Router = express.Router();

// Router.get('/', async (req, res) =>{
//     let {data: Allpost} = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     res.render('index', {Allpost})
// });

// Router.get('/contact', (req, res) =>{
//     res.render('pages.contact')
// });


// Router.get('/service', (req, res) =>{
//     res.render('pages.service')
// });




// Router.get('/test', (req, res) =>{
//     let articles = [
//         {id: 1, title: 'art1'},
//         {id: 2, title: 'art2'},
//         {id: 3, title: 'art3'},
//         {id: 4, title: 'art4'},

//     ];

//     res.json(articles)
// });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', articleController.articleList)
app.use( '/articles' ,articleRoutes)
app.use( '/pages', pages)

// Router.get('/test/:id', (req,res) => {
//     let {id} = req.params
//     res.json({articleID : id, query: req.query})
// });

// Router.post('/test', (req, res) =>{
//     res.json({
//         message: req.body
//     })
// });

app.use(Router)

app.all('*', (req, res) => {
    res.render('pages/404')
})

// app.use(Router)
app.listen(PORT, () =>{
    console.log(`Server working at localhost://https ${PORT}`)
})