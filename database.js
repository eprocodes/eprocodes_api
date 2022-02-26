// This is used to talk to mysql
//var mysql = require('mysql2/promise');

// var config = {
//   host: 'sql6.freemysqlhosting.net', // Replace with your host name
//   user: 'sql6424379',      // Replace with your database username
//   password: '9WeC1qfU9S',      // Replace with your database password
//   database: 'sql6424379' // // Replace with your database Name
// }
// async function query() {
//   const connection = await mysql.createConnection(config);
//   const [results, ] = await connection.execute("SELECT * FROM news");
//   return results;
// }
// module.exports = {
//   query
// }


// Below code used to talk to mango db
const axios = require('axios');

const data = JSON.stringify({
    "collection": "eprocodescollection",
    "database": "eprocodes",
    "dataSource": "Cluster0",
    // "projection": {
    //     "_id": 1,
    //     "name": "monah"
    // }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-iejre/endpoint/data/beta/action/find',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'V13RtN9s6g6tUij3AEIesvSZ9SF2SzxzoGxYMIqg6P0Kw2qM5QIADlG6PSQzyBIn'
    },
    data : data
};
            
async function query(){
    await axios(config)
     .then(async function (response) {
        result = await JSON.stringify(response.data);
     })
     .catch(function (error) {
         console.log(error);
     });
     return result;
 }
 

module.exports = {
    query
}
