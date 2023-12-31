const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

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

const cors = require("cors");
app.use(cors());

app.post("/real-estates", (req, res) => {
  const realEstate = req.body; // Make sure you have body-parser middleware to parse JSON body
  console.log(realEstate);
  res.status(201).send("Real estate added");
});
