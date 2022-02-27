// getnews function for post tea route
// Calling a custom module
//var database = require('../database.js');
// async function getAllNews (){
    
var database = require('../database.js');
var globalvariables = require('../globalvariables.js');

const data = JSON.stringify({
    "collection": globalvariables.global.databaseCollection,
    "database": globalvariables.global.databaseName,
    "dataSource": globalvariables.global.datasource,
    "document": {
        "name": "hi2"
    }
});

var config = {
    method: globalvariables.global.postMethod,
    url: globalvariables.global.insertOneAPI,
    headers: globalvariables.global.headers,
    data: data
};

const postNews = async (req, res, next) => {
    const results = await database.query(config);
    res.json(results);
}


module.exports = { postNews };