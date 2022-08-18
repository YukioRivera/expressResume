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
app.get("/", function(req, res) {
    res.locals.title = "Yukio's Home Page";                    // THIS LINE IS KEY
    res.render("index.ejs");
});

app.get("/softwareDesign", function(req, res) {
    res.locals.title = "CST 338: Software Design";
    res.render("softwareDesign");
});

app.get("/databaseManagement", function(req, res) {
    res.locals.title = "CST 363: Database Management";
    res.render("databaseManagement");
});

app.get("/operatingSystems", function(req, res) {
    res.locals.title = "CST 334: Operating Systems";
    res.render("operatingSystems");
});

app.get("/computerNetworking", function(req, res) {
    res.locals.title = "CST 311: Introduction to Computer Networking";
    res.render("computerNetworking");
});

app.get("/internetProgramming", function(req, res) {
    res.locals.title = "CST 336: Internet Programming";
    res.render("internetProgramming");
});

// Classes For website:

// CST 338: Software Design 
// CST 363: Database Management
// CST 334: Operating Systems
// CST 311: Introduction to Computer Networking 
// CST 336: Internet Programming 
// CST 462s: Race, Gender, Class of Digital World 
// CST 370: Algorithm’s 
// CST 383: Introduction to Data Science 
// CST 438: Software Engineering 
// CST 489: Capstone Project Planning 
// CST 499: Directed Group Capstone  
