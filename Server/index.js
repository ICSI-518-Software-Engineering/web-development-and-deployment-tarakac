const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { db } = require("./configuration/db");
const { createProduct, updateProducts, deleteProduct, getProducts } = require("./controllers/inventory-items");
const { imageUpload } = require("./controllers/file-upload");
const authController = require("./controllers/authController"); // Import authController
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const AssignedPortNumber = process.env.LocalPort || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));
db();

// Your existing routes
app.post("/create-item", createProduct);
app.post("/update-item", updateProducts);
app.delete("/delete-item", deleteProduct);
app.post("/upload-image", imageUpload);
app.get("/get-items", getProducts);

// SignUp Route
app.post("/signUp", authController.signUp);

// SignIn Route
app.post("/signIn", authController.signIn);

app.post("/numbers", (req, res) => {
  const { operand1, operand2 } = req.body;
  const calculatedSum = parseFloat(operand1) + parseFloat(operand2);
  res.json({ calculatedSum });
});

app.listen(AssignedPortNumber, () => console.log(`Server running on port ${AssignedPortNumber}`));