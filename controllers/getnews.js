// getnews function for post tea route
// Calling a custom module
var database = require('../database.js');

// async function getAllNews (){
 const getAllNews = async (req, res, next) => {
    const results = await database.query();
    res.json(results);
}

module.exports = {getAllNews};