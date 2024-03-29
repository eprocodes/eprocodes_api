// getnews function for post tea route
// Calling a custom module
var database = require('../database.js');
var globalvariables = require('../globalvariables.js');

const data = JSON.stringify({
    "collection": globalvariables.global.databaseProjectsCollection,
    "database": globalvariables.global.databaseName,
    "dataSource": globalvariables.global.datasource
});

var config = {
    method: globalvariables.global.postMethod,
    url: globalvariables.global.findAllAPI,
    headers: globalvariables.global.headers,
    data : data
};

// async function getAllProjects (){
 const getAllProjects = async (req, res, next) => {
    const results = await database.query(config);
    res.json(results.documents);
}

module.exports = {getAllProjects};