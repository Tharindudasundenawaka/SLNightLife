import express from "express";

const signUpRouter = express.Router();
import { signUp } from "../controllers/signUpController.js";

signUpRouter.post('/signup', signUp);

export default  signUpRouter;
