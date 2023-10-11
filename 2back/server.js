const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "alllisting",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

const storage = multer.diskStorage({
  destination: './uploads/', // Set the folder where uploaded images will be stored
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

// Define an endpoint for uploading images
app.post('/upload', upload.single('image'), (req, res) => {
  const { originalname, buffer } = req.file;

  // Insert the image data into the database
  const sql = 'INSERT INTO images (name, image_data) VALUES (?, ?)';
  db.query(sql, [originalname, buffer], (err, result) => {
    if (err) {
      console.error('Error inserting image into the database: ' + err);
      res.status(500).json({ error: 'Error inserting image' });
    } else {
      res.status(201).json({ message: 'Image uploaded and inserted successfully' });
    }
  });
});
// Create a new listing (POST request)
app.post("/listings", (req, res) => {
  const {
    title,
    country,
    city,
    zipcode,
    description,
    price,
    bedrooms,
    bathrooms,
    saleType,
    homeType,
  } = req.body;
    const slug = title;
    const address = `${city} ${country}`
  const query =
    "INSERT INTO listings (title, slug, address, city, zipcode, description, price, bedrooms, bathrooms, saleType, homeType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    query,
    [
      title,
      slug,
      address,
      city,
      zipcode,
      description,
      price,
      bedrooms,
      bathrooms,
      saleType,
      homeType,
    ],
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

app.get("/getList", (req,res)=> {
  const query = "SELECT * FROM listings"
})

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
