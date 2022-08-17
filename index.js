const { render } = require("ejs");
const express = require("express");
const mysql = require("mysql");
const app = express();
const pool = require('./dbPool');

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

// Mandatroy to run 
// Functions
async function executeSQL(sql, params) {
    return new Promise (function (resolve, reject) {
        pool.query(sql, params, function (err, rows, fields) {
            if (err) throw err;
                resolve(rows);
        });
    });
} // execute sql 

// start server 
app.listen(3000, () => {
    console.log("Welcome to Yukio's Website")
});

// Routes 
app.get('/', function(req, res) {
    res.render('index')
});
