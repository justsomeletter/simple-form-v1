import "./App.css";
import { useState } from "react";

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="form-body">
        <form onSubmit={handleSubmit}>
          <label>
            Name: <input type="text" name="name" />
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
