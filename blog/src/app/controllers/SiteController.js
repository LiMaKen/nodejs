class SiteController {
  index(req,res) {
    res.render('home')
  }
  search(req,res) {
   
    const test =  req.body //body để bắt value
    const timkiem = test.timkiem
    console.log(test)   
    if(timkiem == 'home' ){
      res.render('home')
   
    }
    if(timkiem == 'lanh ngu' ){
      res.render('test')
   
    }
    if (timkiem == 'news' ){
      res.render('news')
    }
    else{
      res.render('search')
    }
  }
  
}

module.exports = new SiteController