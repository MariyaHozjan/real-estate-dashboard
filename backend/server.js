const fs = require("fs");
const dataFilePath = "./realEstatesData.json";

// Function to load data from file
function loadData() {
  if (fs.existsSync(dataFilePath)) {
    const fileData = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(fileData);
  }
  return [];
}

// Function to save data to file
function saveData(data) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}

// Load existing real estates data from file
let realEstates = loadData();
let nextId =
  realEstates.length > 0 ? Math.max(...realEstates.map((e) => e.id)) + 1 : 1;

console.log("Initial nextId:", nextId);

const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/real-estates", (req, res) => {
  res.json(realEstates);
});

app.post("/real-estates", (req, res) => {
  console.log("Generated nextId for new listing:", nextId);
  const newRealEstate = { id: nextId++, ...req.body };
  realEstates.push(newRealEstate);
  saveData(realEstates);
  res.status(201).json(newRealEstate);
});

app.delete("/real-estates/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log("Parsed ID for deletion:", id);
  const index = realEstates.findIndex((realEstate) => realEstate.id === id);
  saveData(realEstates);
  if (index !== -1) {
    realEstates.splice(index, 1);
    res.status(200).json({ message: "Real estate deleted successfully" });
  } else {
    res.status(404).send("Real estate not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.put("/real-estates/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = realEstates.findIndex((realEstate) => realEstate.id === id);
  if (index !== -1) {
    const updatedRealEstate = { ...realEstates[index], ...req.body };
    realEstates[index] = updatedRealEstate;
    saveData(realEstates);
    res.status(200).json(updatedRealEstate);
  } else {
    res.status(404).send("Real estate not found");
  }
});
