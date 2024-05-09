// const path = require("path")
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import adminRouter from "./routes/adminRouter.js";
import LoginRouter from "./routes/loginRouter.js";
import signUpRouter from "./routes/signUpRouter.js";
import {createInitialAdmin} from './controllers/adminController.js';

dotenv.config();

// connect with MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }) //,
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));



const app = express();

//Middlewares
app.use(cors());

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/admins/", adminRouter);
app.use("/api/", LoginRouter);
app.use("/api/", signUpRouter);


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Create initial admin user if it doesn't exist
    await createInitialAdmin();
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));



//Create Port
const PORT = process.env.PORT || 2000;

//Listen
app.listen(PORT, () => {
  console.log(`Server at running on the port: http://localhost:${PORT}`);
});
