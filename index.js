const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const garden = require('./routes/garden')




const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main'
});


app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/garden",garden)




app.listen(4288, () => {
  console.log('whos ready for garden!')
})
