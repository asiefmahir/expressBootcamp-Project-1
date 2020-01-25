const contactPage = (req, res) => {
    res.render('pages/contact')
}

const servicePage = (req, res) => {
    res.render('pages/service')
};

module.exports = {
    contactPage,
    servicePage
    
}