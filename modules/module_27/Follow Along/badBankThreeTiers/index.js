var express = require('express');
var app     = express();
var cors    =require('cors');

//used to serve static files from public directory
app.use(express.static('public'));