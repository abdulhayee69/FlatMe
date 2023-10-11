const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 8001;

// Enable CORS for all origins
app.use(cors({ origin: '*' }));

// Express middleware to parse JSON data in requests
app.post('/create-listing', async (req, res) => {
    console.log("located")
    // Request body from the client
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
      main_photo,
      photo_1,
      photo_2,
      photo_3,
    } = req.body;
  console.log(req.body)
    // You can customize this URL based on your Django API's location
    const apiUrl = 'http://192.168.1.2:8000/api/listing/manage';
  
    // Prepare the data to be sent in the request
    const data = {
      title,
      slug: title,
      address: `${country}, ${city} ${zipcode}`,
      city,
      state: 'Your State', // Replace with your state
      zipcode,
      description,
      price,
      bedrooms,
      bathrooms,
      sale_type: saleType,
      home_type: homeType,
      main_photo,
      photo_1,
      photo_2,
      photo_3,
      is_published: 'True', // You can change this as needed
    };
  
    try {
      const response = await axios.post(apiUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${req.headers.authorization}`, // Pass the access token from the client
        },
      });
  
      if (response.status === 200) {
        // Successful response from Django API
        res.status(200).json(response.data);
      } else {
        // Handle errors from Django API
        res.status(response.status).json({ error: 'Listing creation failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the listing' });
    }
  });
  
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
