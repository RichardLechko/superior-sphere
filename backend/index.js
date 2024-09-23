import express from "express";
import cookieParser from "cookie-parser"; // Optional
import cors from "cors";
import http from "http";
import "dotenv/config"; // For loading environment variables
import feedbackRoutes from "./routes/feedback.mjs"; // Import feedback routes

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // Optional

app.use("/api/feedback", feedbackRoutes); // Add feedback route

// Create and run the server
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
