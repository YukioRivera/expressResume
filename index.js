const { render } = require("ejs");
const express = require("express");
const mysql = require("mysql");
const app = express();
const pool = require('./dbPool');

// Router for Video
const router = express.Router();

// Express
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// Mandatroy to run 
// Functions
async function executeSQL(sql, params) {
  return new Promise(function(resolve, reject) {
    pool.query(sql, params, function(err, rows, fields) {
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
// To add new class just add a new route 
app.get("/", function(req, res) {
  // res.locals.title = "Yukio's Home Page";  
  let headerTitle = 'Home';
  res.render("index.ejs", { title: 'Homepage', 'headerTitle': headerTitle }); // THIS LINE IS KEY
});

// app.get("/smallProjects", function(req, res) {
//     let headerTitle = "Small Projects";
//     res.render("smallProjects", {title: 'Small Projects', 'headerTitle': headerTitle})
// });

app.get("/majorProseminar", function(req, res) {
  let headerTitle = "CST300: Major ProSeminar";
  res.render("majorProseminar", { title: 'CST300: Major ProSeminar', 'headerTitle': headerTitle })
});

app.get("/softwareDesign", function(req, res) {
  // res.locals.title = "CST 338: Software Design";
  let headerTitle = 'CST338: Software Design';
  res.render("softwareDesign", { title: 'CST338: Software Design', 'headerTitle': headerTitle });
});

app.get("/databaseManagement", function(req, res) {
  // res.locals.title = "CST 363: Database Management";
  let headerTitle = 'CST363: Database Management';
  res.render("databaseManagement", { title: 'CST363: Database Management', 'headerTitle': headerTitle });
});

app.get("/operatingSystems", function(req, res) {
  // res.locals.title = "CST 334: Operating Systems";
  let headerTitle = 'CST334: Operating Systems';
  res.render("operatingSystems", { title: 'CST334: Operating Systems', 'headerTitle': headerTitle });
});

app.get("/computerNetworking", function(req, res) {
  // res.locals.title = "CST 311: Introduction to Computer Networking";
  let headerTitle = 'CST311: Introduction to Computer Networking';
  res.render("computerNetworking", { title: 'CST311: Introduction to Computer Networking', 'headerTitle': headerTitle });
});

app.get("/internetProgramming", function(req, res) {
  // res.locals.title = "CST 336: Internet Programming";
  let headerTitle = 'CST336: Internet Programming';
  res.render("internetProgramming", { title: 'CST336: Internet Programming', 'headerTitle': headerTitle });
});

app.get("/raceGender", function(req, res) {
  // res.locals.title = "CST 336: Internet Programming";
  let headerTitle = 'CST462s: Race, Gender, Class of Digital World';
  res.render("raceGender", { title: 'CST462: Race, Gender, Class of Digital World', 'headerTitle': headerTitle });
});

app.get("/algorithms", function(req, res) {
  // res.locals.title = "CST 336: Internet Programming";
  let headerTitle = 'CST 370: Algorithms';
  res.render("algorithms", { title: 'CST 370: Algorithms', 'headerTitle': headerTitle });
}); 

app.get("/dataScience", function(req, res) {
  // res.locals.title = "CST 336: Internet Programming";
  let headerTitle = 'CST383: Introduction to Data Science';
  res.render("dataScience", { title: 'CST383: Introduction to Data Science ', 'headerTitle': headerTitle });
});

app.get("/softwareEngineering", function(req, res) {
  // res.locals.title = "CST 336: Internet Programming";
  let headerTitle = 'CST438: Software Engineering';
  res.render("softwareEngineering", { title: 'CST438: Software Engineering', 'headerTitle': headerTitle });
});

app.get("/capstonePlanning", function(req, res) {
  // res.locals.title = "CST 336: Internet Programming";
  let headerTitle = 'CST489: Capstone Project Planning ';
  res.render("capstonePlanning", { title: 'CST489: Capstone Project Planning', 'headerTitle': headerTitle });
});

app.get("/directedCapstone", function(req, res) {
  // res.locals.title = "CST 336: Internet Programming";
  let headerTitle = 'CST499: Directed Group Capstone  ';
  res.render("directedCapstone", { title: 'CST499: Directed Group Capstone  ', 'headerTitle': headerTitle });
});

// Classes For website:

// CST 338: Software Design 
// CST 363: Database Management
// CST 334: Operating Systems
// CST 311: Introduction to Computer Networking 
// CST 336: Internet Programming 
// CST 462s: Race, Gender, Class of Digital World 
// CST 370: Algorithms 
// CST 383: Introduction to Data Science 
// CST 438: Software Engineering 
// CST 489: Capstone Project Planning 
// CST 499: Directed Group Capstone  
