const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const Record = require("./models/Record");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serve frontend

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/sampledb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Generate 10 new records
app.post("/generate-data", async (req, res) => {
  try {
    // Clear collection
    await Record.deleteMany({});

    // Generate 10 records
    const newRecords = Array.from({ length: 10 }, (_, i) => ({
      name: `Item ${i + 1}`,
      value: Math.floor(Math.random() * 100),
    }));

    await Record.insertMany(newRecords);
    res.status(200).json({ message: "10 records generated", data: newRecords });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
