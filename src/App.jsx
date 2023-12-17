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
