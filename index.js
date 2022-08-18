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
    // res.locals.title = "Yukio's Home Page";                    
    res.render("index.ejs", {title: 'Homepage'}); // THIS LINE IS KEY
});

app.get("/majorProseminar", function(req, res) {
    res.render("majorProseminar", {title: 'CST300: Major ProSeminar'})
})

app.get("/softwareDesign", function(req, res) {
    // res.locals.title = "CST 338: Software Design";
    res.render("softwareDesign", {title: 'CST338: Software Design'});
});

app.get("/databaseManagement", function(req, res) {
    // res.locals.title = "CST 363: Database Management";
    res.render("databaseManagement", {title: 'CST363: Database Management'});
});

app.get("/operatingSystems", function(req, res) {
    // res.locals.title = "CST 334: Operating Systems";
    res.render("operatingSystems", {title: 'CST334: Operating Systems'});
});

app.get("/computerNetworking", function(req, res) {
    // res.locals.title = "CST 311: Introduction to Computer Networking";
    res.render("computerNetworking", {title: 'CST311: Introduction to Computer Networking'});
});

app.get("/internetProgramming", function(req, res) {
    // res.locals.title = "CST 336: Internet Programming";
    res.render("internetProgramming", {title: 'CST336: Internet Programming'});
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
