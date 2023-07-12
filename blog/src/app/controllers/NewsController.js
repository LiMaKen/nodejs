class NewsController {
 index(req,res) {
    res.render('news')
 }
 show(req,res) {
   res.send('test ne')
}
}

module.exports = new NewsController