const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
// http log
//app.use(morgan('combined'))
//template
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
// bắt value của post
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views')); // teamlate views địa chỉ đến file

// app.get('/', (req, res) => { // '/' là router : tuyến đường
//   res.render('home')
// })
// app.get('/news', (req, res) => { // '/' là router : tuyến đường
//   res.render('news')
// })
// app.get('/test', (req, res) => { // '/' là router : tuyến đường
//   res.render('test')
// })
// app.get('/search', (req, res) => { // '/' là router : tuyến đường
//  // console.log(req.query.q)
//   res.render('search')
// })
// app.post('/search', (req, res) => { // '/' là router : tuyến đường
//    console.log(req.body) //body để bắt value
//    res.send('')
//  })
route(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
