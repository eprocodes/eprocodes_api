const express = require('express'); //import express
var cors = require('cors');
const allowedOrigins = ['http://localhost:4200'];
const options = {
    origin: allowedOrigins
  };
// 1.
const getProjectsrouter  = express.Router(); 
// 2.
const projectsController = require('../controllers/getprojects'); 
// 3.
getProjectsrouter.get('/getprojects',cors(options), projectsController.getAllProjects); 
// 4. 
module.exports = getProjectsrouter; // export to use in server.js