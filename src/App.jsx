import "./App.css";
import { useState } from "react";

function App() {
  // the handle the data from user who submitted the form
  const handleSubmit = (e) => {
    //prevent the browesr from reloding
    e.preventDefault();

    //read the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson.fname, formJson.uid_num);
  };

  return (
    <div>
      <div className="form-body">
        <form onSubmit={handleSubmit}>
          <label>
            Name: <input type="text" name="fname" />
          </label>{" "}
          <br />
          <label>
            PUC Date: <input type="date" name="puc_date" />
          </label>{" "}
          <br />
          <label>
            UID No.: <input type="text" name="uid_num" />
          </label>{" "}
          <br />
          <label>
            Insurance No.: <input type="number" name="insurance_num" />
          </label>
          <br />
          <button type="reset"> Reset Form</button> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;

/*
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

connection.connect();

// Middleware to parse JSON data
app.use(bodyParser.json());

// API endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Insert data into the database
  const sql = 'INSERT INTO your_table_name SET ?';

  connection.query(sql, formData, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

*/
