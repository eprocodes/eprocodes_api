const express = require('express'); //import express
var cors = require('cors');
const allowedOrigins = ['http://localhost:4200'];
const options = {
    origin: allowedOrigins
  };
// 1.
const loginrouter  = express.Router(); 
// 2.
const loginController = require('../controllers/login'); 
// 3. Post with param
loginrouter.post('/login',cors(options), loginController.login); 
// 4. 
module.exports = loginrouter; // export to use in server.js