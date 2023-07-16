const New = require('../models/new');
class NewsController {
    index(req, res) {
        New.find({})
            .then((news) => {
                const test = res.json(news);
                return test
            })
            .catch(() => {
                res.status(400).json({ error: 'ERROR!!!' });
            });
     
    }
    
    show(req, res) {
        res.send('alo');
    }
}

module.exports = new NewsController();
