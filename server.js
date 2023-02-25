const express = require ('express');
const newsRoute = require('./routes/getnews'); // import the routes
var cors = require('cors');
const getUsernamerouter = require('./routes/getusername');
const postNewsrouter = require('./routes/postnews');
const loginrouter = require('./routes/login');

//const teaRoute = require('./routes/tea'); // import the routes

const app = express();

app.use(express.json());

const allowedOrigins = '*';
// const allowedOrigins = ['http://localhost:8100'];
const options = {
    origin: allowedOrigins
  };

app.use(cors(options));

//If you want to pass two routers
//app.use('/', newsRoute,teaRoute); //to use the routes
app.use('/', newsRoute, getUsernamerouter, postNewsrouter, loginrouter); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})