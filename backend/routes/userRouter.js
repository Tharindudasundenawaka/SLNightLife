import express from 'express';
import  { userLoginController, userSignUpController}  from "../controllers/userController.js";

const usertRouter = express.Router();

usertRouter.post('/userlLogin', userLoginController);
usertRouter.post('/userSignUp', userSignUpController);

export default usertRouter;