const path = require('path');
const staticFiles = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(staticFiles(path.join(__dirname, 'dist')));

app.listen(3000);
