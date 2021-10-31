const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

//Template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resouces/views'));

app.get('/', (req, res) => {
  res.render('home');
})

//HTTP Logger
app.use(morgan('combined'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})