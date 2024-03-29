// getnews function for post tea route
// Calling a custom module
//var database = require('../database.js');
// async function getAllNews (){
    
var database = require('../database.js');
var globalvariables = require('../globalvariables.js');


const postNews = async (req, res, next) => {


    const data = JSON.stringify({
        "collection": globalvariables.global.databaseCollection,
        "database": globalvariables.global.databaseName,
        "dataSource": globalvariables.global.datasource,
        //Posted Object with param called name
        "document": req.body
    });
    
    var config = {
        method: globalvariables.global.postMethod,
        url: globalvariables.global.insertOneAPI,
        headers: globalvariables.global.headers,
        data: data
    };

    
    // Used to call Database and Post Data
    const results = await database.query(config);
    res.json(results);
}


module.exports = { postNews };
