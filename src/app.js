var express = require('express');
const app = express()
const port = 3000
var index = require('./router/index');

app.use('/', index);

app.get('/hello', (req, res, next) => {
    res.status(200).send();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

