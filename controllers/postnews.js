// getnews function for post tea route
// Calling a custom module
//var database = require('../database.js');
// async function getAllNews (){

const postNews = async (req, res, next) => {

// Below code used to talk to mango db
const axios = require('axios');

const data = JSON.stringify({
    "collection": "eprocodescollection",
    "database": "eprocodes",
    "dataSource": "Cluster0",
    "document": {
        "_id": {
            "$oid": "621a73bd4045f6f6fe4252e5"
        },
        "name": "test api1"
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-iejre/endpoint/data/beta/action/insertOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'V13RtN9s6g6tUij3AEIesvSZ9SF2SzxzoGxYMIqg6P0Kw2qM5QIADlG6PSQzyBIn',
    },
    data : data
};

 axios(config)
     .then( function (response) {
        result =  response.data;
        console.log(result);
     })
     .catch(function (error) {
         console.log(error);
     });
 

}
    

module.exports = {postNews};