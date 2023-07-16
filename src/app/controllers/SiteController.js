class SiteController {
    index(req, res) {
        res.render('home');
    }
    search(req, res) {
        const test = req.body; //body để bắt value
        const timkiem = test.timkiem;
        console.log(test);
        if (timkiem == 'home') {
            res.render('home');
            return;
        }
        if (timkiem == 'lanh ngu') {
            res.render('test');
            return;
        }
        if (timkiem == 'news') {
            res.render('news');
            return;
        } else {
            res.render('search');
        }
    }
}

module.exports = new SiteController();
