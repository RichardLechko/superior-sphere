const express = require("express");
const bodyParser = require("body-parser");
const contactRoute = require("./api/contact");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:4321", // Allow requests from your frontend
    methods: ["POST"], // Specify the methods you want to allow
  })
);

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/contact", contactRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
