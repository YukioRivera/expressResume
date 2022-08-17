// Copy paste this entire page so you can use database 
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10, 
    host: "dt3bgg3gu6nqye5f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ubobya67yzo4jrkd",
    password: "v8c6dkezjun8gwja",
    database: "ato6alvv8zl6m9wm"
});

module.exports = pool;