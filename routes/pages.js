const Router = require('express').Router()
const {contactPage, servicePage } = require('../controllers/pagesController')

Router.get('/contact', contactPage )
Router.get('/service', servicePage )



module.exports = Router