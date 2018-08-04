const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const garden = require('./routes/garden');





const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main'
});


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + '/public'));
app.use("/garden",garden)




app.listen(4288, () => {
  console.log('whos ready for garden!')
})
