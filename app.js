var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname,'/public')));
app.set('views', (path.join(__dirname,'/views')));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index',{name :"Dimpal"});
})

app.listen(3000);