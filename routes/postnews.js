const express = require('express'); //import express
var cors = require('cors');
const allowedOrigins = ['http://localhost:4200'];
const options = {
    origin: allowedOrigins
  };
// 1.
const postNewsrouter  = express.Router(); 
// 2.
const postNewsController = require('../controllers/postnews'); 
// 3. Post with param
postNewsrouter.post('/postnews',cors(options), postNewsController.postNews); 
// 4. 
module.exports = postNewsrouter; // export to use in server.js