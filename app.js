var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  var context = {title: 'Whack-a-Cat!'};
  res.render('index.hbs', context);
})

app.get('/finished', function(req, res){
  res.render('index-FINISHED.hbs')
})


app.listen(8000, function(){
  console.log('Awesome video-react now up on PORT 8000')
});
