const express = require('express');
const app = express();
app.use(require('prerender-node'));
app.listen(3001);