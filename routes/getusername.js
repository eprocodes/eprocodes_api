const express = require('express'); //import express
var cors = require('cors');
const allowedOrigins = ['http://localhost:4200'];
const options = {
    origin: allowedOrigins
  };
// 1.
const getUsernamerouter  = express.Router(); 
// 2.
const usernameController = require('../controllers/getusername'); 
// 3.
getUsernamerouter.get('/getusername',cors(options), usernameController.getUsername); 
// 4. 
module.exports = getUsernamerouter; // export to use in server.js