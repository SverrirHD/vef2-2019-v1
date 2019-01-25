/**
 * Todo:
 *  2. Fara í gegnum kröfur í verkefna lýsingu
 *  3. Búa til 404 síðu
 */

const express = require('express');
const path = require('path');
const app = express();
const lectures = require('./lectures')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

app.use('/', lectures);

function notFoundHandler(req, res, next) {
  res.status(404).send('404 - Síða fannst ekki');
}

app.use(notFoundHandler);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
