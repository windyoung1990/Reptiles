const express = require('express');
const app = express();
app.use(require('prerender-node'));
app.use('*', (req, res, next) => {
    console.log('express');
    next()
})
app.listen(3001);