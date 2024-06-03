const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const hostname = 'localhost';
const port = 3000;
const app = express();
// 指定模板存放目录
app.set('views', 'views');

// 指定模板引擎为 Handlebars
app.set('view engine', 'hbs');
app.use(express.json())
app.use(express.urlencoded())

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.get('/broken', (req, res) => {
  throw new Error('Broken!');
});
app.use(express.static('public'));
app.use('*', (req, res) => {
  res.status(404).render('404', { url: req.originalUrl });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500');
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
