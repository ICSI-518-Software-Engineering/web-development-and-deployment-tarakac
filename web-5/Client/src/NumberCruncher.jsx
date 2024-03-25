import React, { useState } from "react";
import "./main.css";
import axios from "axios";

function NumberCruncher() { 
  const [inputValues, setInputValues] = useState({ 
    operand1: "",
    operand2: "",
  });
  const [clientSideTotal, setClientSideTotal] = useState("");
  const [serverSideTotal, setServerSideTotal] = useState("");

  const handleAddition = async () => {
    const { operand1, operand2 } = inputValues;
    const calculatedSum = parseFloat(operand1) + parseFloat(operand2);

    await axios
      .post("http://ec2-3-19-58-71.us-east-2.compute.amazonaws.com:5000/numbers", { operand1, operand2 })
      .then((response) => {
        setServerSideTotal(`Server-Calculated Total Sum: ${response.data.calculatedSum}`);
        setClientSideTotal(`Client-Side Total Sum: ${calculatedSum}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="main-container"> 
      <h1 className="calculator-header">Number Cruncher</h1> 
      <div className="input-section">
        <div className="input-row">
          <label htmlFor="operand1" className="input-label">
            Number A:
          </label>
          <input
            type="number"
            className="input-field form-control"
            id="operand1"
            value={inputValues.operand1}
            onChange={(e) => setInputValues({ ...inputValues, operand1: e.target.value })}
          />
        </div>
        <div className="input-row">
          <label htmlFor="operand2" className="input-label">
            Number B:
          </label>
          <input
            type="number"
            className="input-field form-control"
            id="operand2"
            value={inputValues.operand2}
            onChange={(e) => setInputValues({ ...inputValues, operand2: e.target.value })}
          />
        </div>
      </div>
      <button
        type="button"
        className="calculate-button btn btn-primary mb-4"
        onClick={handleAddition}
      >
        Crunch the Numbers
      </button>
      <div className="result-section">
        <div className="result-label"><b>Results:</b></div>
        <div className="result-client">{clientSideTotal}</div>
        <div className="result-server">{serverSideTotal}</div>
      </div>
    </div>
  );
}

export default NumberCruncher;
