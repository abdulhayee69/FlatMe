
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const fileUpload = require("express-fileupload");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

const db = mysql.createConnection({
  host: "http://170.64.158.74",
  user: "root",
  password: "",
  database: "allListings",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});


app.post("/upload", (req, res) => {
  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }

  const image = req.files.image; 

  const listingData = req.body;

  db.query("INSERT INTO listings SET ?", listingData, (err, results) => {
    if (err) {
      console.error("Error inserting data: " + err);
      return res.status(500).send("Error inserting data.");
    }

    return res.status(200).send("Data inserted successfully.");
  });
});


const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});