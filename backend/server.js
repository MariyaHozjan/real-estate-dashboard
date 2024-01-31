const fs = require("fs");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const dataFilePath = "./realEstatesData.json";
const usersFilePath = "./usersData.json";

function loadData(filePath) {
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData);
  }
  return [];
}

function saveData(data, filePath) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}

let realEstates = loadData(dataFilePath);
let users = loadData(usersFilePath);

let nextId =
  realEstates.length > 0 ? Math.max(...realEstates.map((e) => e.id)) + 1 : 1;

console.log("Initial nextId:", nextId);

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
  saveData(realEstates, dataFilePath);
  res.status(201).json(newRealEstate);
});

app.put("/real-estates/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = realEstates.findIndex((realEstate) => realEstate.id === id);
  if (index !== -1) {
    const updatedRealEstate = { ...realEstates[index], ...req.body };
    realEstates[index] = updatedRealEstate;
    saveData(realEstates, dataFilePath);
    res.status(200).json(updatedRealEstate);
  } else {
    res.status(404).send("Real estate not found");
  }
});

app.delete("/real-estates/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = realEstates.findIndex((realEstate) => realEstate.id === id);
  if (index !== -1) {
    realEstates.splice(index, 1);
    saveData(realEstates, dataFilePath);
    res.status(200).json({ message: "Real estate deleted successfully" });
  } else {
    res.status(404).send("Real estate not found");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ username }, "your-secret-key");
      res.json({ token });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send("Error logging in");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
