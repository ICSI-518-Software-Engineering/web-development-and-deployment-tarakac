const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const AssignedPortNumber = process.env.LocalPort || 5000;
app.use(bodyParser.json());
app.use(cors());

app.post("/numbers", (req, res) => {
  const { operand1, operand2 } = req.body;
  const calculatedSum = parseFloat(operand1) + parseFloat(operand2);
  res.json({ calculatedSum });
});

app.listen(AssignedPortNumber, () => console.log(`Server running on port ${AssignedPortNumber}`));
