import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
const port = 3000;

//Enable CORS
app.use(cors());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rahul@12345",
  database: "fs",
});

connection.connect();

// Middleware to parse JSON data
app.use(express.json());

// API endpoint to handle form submissions
app.post("/submit-form", (req, res) => {
  const formData = req.body;

  // Insert data into the database
  const sql = "INSERT INTO user_data SET ?";

  connection.query(sql, formData, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Data inserted successfully");
      res.status(200).send("Data inserted successfully");
    }
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to Simple form home page!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
