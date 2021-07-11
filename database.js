var mysql = require('mysql2/promise');

var config = {
  host: '127.0.0.1', // Replace with your host name
  user: 'mghannam',      // Replace with your database username
  password: 'P@ssw0rd',      // Replace with your database password
  database: 'mysql' // // Replace with your database Name
}
async function query() {
  const connection = await mysql.createConnection(config);
  const [results, ] = await connection.execute("SELECT * FROM news");
  return results;
}
module.exports = {
  query
}