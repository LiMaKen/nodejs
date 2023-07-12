class SiteController {
    index(req, res) { // '/' là router : tuyến đường
        res.render('home')
      }
      test(req, res) { // '/' là router : tuyến đường
        res.render('test')
      }
      search(req, res) { // '/' là router : tuyến đường
        res.render('search')
      }
     
   }
   
   module.exports = new SiteController