const express = require ('express');
const newsRoute = require('./routes/getnews'); // import the routes
var cors = require('cors');

//const teaRoute = require('./routes/tea'); // import the routes

const app = express();

app.use(express.json());


const allowedOrigins = ['http://localhost:4200'];
const options = {
    origin: allowedOrigins
  };

app.use(cors(options));

//If you want to pass two routers
//app.use('/', newsRoute,teaRoute); //to use the routes
app.use('/', newsRoute); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})