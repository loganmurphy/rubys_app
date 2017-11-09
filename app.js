var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  var context = {title: 'Whack-a-Cat!'};
  res.render('index.hbs', context);
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('Your app is up on port 8080. Let\'s Whack-a-Cat!');
});
