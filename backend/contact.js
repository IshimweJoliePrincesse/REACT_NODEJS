// backend/index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/exam", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Define MongoDB schema and model
const FormSchema = new mongoose.Schema({
  Title: String,
  FirstName: String,
  LastName: String,
  Position: String,
  Company: String,
  BusinessArena: String,
  Employees: String,
  StreetNr: String,
  AdditionalInformation: String,
  ZipCode: String,
  Place: String,
  Country: String,
  Code: String,
  PhoneNumber: String,
  YourEmail: String,
});

const Form = mongoose.model("Form", FormSchema);

// CRUD operations
// Create a new form entry
app.post("/contact", async (req, res) => {
  try {
    const formData = req.body;
    const newForm = new Form(formData);
    await newForm.save();
    res.status(201).json({ message: "Form data saved successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to save form data." });
  }
});

// Retrieve all form entries
app.get("/contacts", async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve form data." });
  }
});

// Retrieve a specific form entry by ID
app.get("/contact/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      res.status(404).json({ message: "Form not found." });
      return;
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve form data." });
  }
});

// Update a form entry by ID
app.put("/contact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const formData = req.body;
    const updatedForm = await Form.findByIdAndUpdate(id, formData, {
      new: true,
    });
    if (!updatedForm) {
      res.status(404).json({ message: "Form not found." });
      return;
    }
    res.status(200).json({ message: "Form data updated successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to update form data." });
  }
});

// Delete a form entry by ID
app.delete("/contact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedForm = await Form.findByIdAndDelete(id);
    if (!deletedForm) {
      res.status(404).json({ message: "Form not found." });
      return;
    }
    res.status(200).json({ message: "Form data deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete form data." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
