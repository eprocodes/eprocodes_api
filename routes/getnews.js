const express = require('express'); //import express
var cors = require('cors');
const allowedOrigins = ['http://localhost:4200'];
const options = {
    origin: allowedOrigins
  };
// 1.
const getNewsrouter  = express.Router(); 
// 2.
const newsController = require('../controllers/getnews'); 
// 3.
getNewsrouter.get('/getnews',cors(options), newsController.getAllNews); 
// 4. 
module.exports = getNewsrouter; // export to use in server.js