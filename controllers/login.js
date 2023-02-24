// getnews function for post tea route
// Calling a custom module
//var database = require('../database.js');
// async function getAllNews (){
    
var database = require('../database.js');
var globalvariables = require('../globalvariables.js');


const login = async (req, res, next) => {

    const query = req.body;
    
    const data = JSON.stringify({
        "collection": globalvariables.global.databaseLoginCollection,
        "database": globalvariables.global.databaseName,
        "dataSource": globalvariables.global.datasource,
        "filter": query
    });
    
    var config = {
        method: globalvariables.global.postMethod,
        url: globalvariables.global.findOneAPI,
        headers: globalvariables.global.headers,
        data: data
    };

    
    // Used to call Database and Post Data
    const results = await database.query(config);
    console.log(results);
    res.json(results);
}


module.exports = { login };
