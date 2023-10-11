const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// MySQL database connection
const db = mysql.createConnection({
  host: "your_database_host",
  user: "your_database_user",
  password: "your_database_password",
  database: "your_database_name",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a new listing (POST request)
app.post("/listings", (req, res) => {
  const { title, slug, address, city, state, zipcode, description, price, bedrooms, bathrooms, sale_type, home_type } = req.body;

  const query = "INSERT INTO listings (title, slug, address, city, state, zipcode, description, price, bedrooms, bathrooms, sale_type, home_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    query,
    [title, slug, address, city, state, zipcode, description, price, bedrooms, bathrooms, sale_type, home_type],
    (err, result) => {
      if (err) {
        console.error("Error creating listing: " + err);
        res.status(500).json({ error: "Error creating listing" });
        return;
      }
      res.status(201).json({ message: "Listing created successfully" });
    }
  );
});

// Get all listings (GET request)
app.get("/listings", (req, res) => {
  const query = "SELECT * FROM listings";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching listings: " + err);
      res.status(500).json({ error: "Error fetching listings" });
      return;
    }
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
