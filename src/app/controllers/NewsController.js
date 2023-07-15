const New = require('../models/new');
class NewsController {
    index(req, res) {
        New.find({})
            .then((news) => res.json(news))
            .catch(() => {
                res.status(400).json({ error: 'ERROR!!!' });
            });
        // res.json({
        //     name:"test"
        // })
    }
    show(req, res) {
        res.send('alo');
    }
}

module.exports = new NewsController();
