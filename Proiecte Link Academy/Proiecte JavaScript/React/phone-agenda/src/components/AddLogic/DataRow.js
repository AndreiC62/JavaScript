import React from "react";
import "./DataRow.css";

function DataRow({ data, index, deleted }) {
  return (
    <div className="data-row">
      <p className="dataRow">Name: {data.name}</p>
      <p className="dataRow">Number: {data.phoneNumber}</p>
      <button className="deleteBtn" onClick={() => deleted(index)}>
        Delete
      </button>
    </div>
  );
}

export default DataRow;
