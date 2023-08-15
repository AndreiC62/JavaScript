import React, { useState, useEffect } from "react";
import DataRow from "./DataRow";
import "./AddLogic.css";

function DataForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  // IA DATELE DIN LOCAL STORAGE -----------------------------------------

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("submittedData"));
    if (storedData) {
      setSubmittedData(storedData);
    }
  }, []);

  // ADAUGA DATELE IN LOCAL STORAGE ------------------------------------

  useEffect(() => {
    localStorage.setItem("submittedData", JSON.stringify(submittedData));
  }, [submittedData]);

  // SAVE BUTTON LOGIC -----------------------------------------------------

  const saveBtn = (e) => {
    e.preventDefault();
    const newData = { name, phoneNumber };
    setSubmittedData([...submittedData, newData]);
    setName("");
    setPhoneNumber("");
  };

  // DELETE BUTTON LOGIC -----------------------------------------------------

  const deleteBtn = (index) => {
    const newData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(newData);
  };

  return (
    <div className="addContactContainer">
      <form onSubmit={saveBtn}>
        <div className="contactData">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="e.g. Cazac Andrei"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="contactData">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            placeholder="+40 721 944 958"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="buttonContainer">
          <button type="submit" className="saveButton">
            Save Contact
          </button>
        </div>
      </form>
      <div>
        <br></br>
        <h2 className="recentSaved">Recent Saved Contacts</h2>
        <div className="test">
          {submittedData.map((data, index) => (
            <DataRow
              key={index}
              data={data}
              index={index}
              deleted={deleteBtn}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataForm;
