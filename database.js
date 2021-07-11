var mysql = require('mysql2/promise');

var config = {
  host: 'sql6.freemysqlhosting.net', // Replace with your host name
  user: 'sql6424379',      // Replace with your database username
  password: '9WeC1qfU9S',      // Replace with your database password
  database: 'sql6424379' // // Replace with your database Name
}
async function query() {
  const connection = await mysql.createConnection(config);
  const [results, ] = await connection.execute("SELECT * FROM news");
  return results;
}
module.exports = {
  query
}