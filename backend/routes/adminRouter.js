import express from "express";
import { loginAdmin, signUpAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();

// Route for admin login
adminRouter.post("/adminLogin", loginAdmin);

// Route for admin sign up
adminRouter.post("/adminSignUp", signUpAdmin);

export default adminRouter;
