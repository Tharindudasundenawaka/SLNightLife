import express from 'express';
import  { adminLoginController, adminSignUpController}  from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post('/adminLogin', adminLoginController);
adminRouter.post('/adminSignUp', adminSignUpController);

export default adminRouter;