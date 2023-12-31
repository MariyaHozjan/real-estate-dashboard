const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
// Define routes here
app.get("/real-estates", (req, res) => {
  res.json([
    {
      title: "Estate 1",
      description: "Description 1",
      price: 100000,
      imagePath: "path/to/image1.jpg",
    },
    {
      title: "Estate 2",
      description: "Description 2",
      price: 200000,
      imagePath: "path/to/image2.jpg",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use(cors());

let realEstates = []; // Simple in-memory storage

app.post("/real-estates", (req, res) => {
  const newRealEstate = req.body;
  realEstates.push(newRealEstate); // Add to the list
  res.status(201).json(newRealEstate); // Respond with the new item
});
