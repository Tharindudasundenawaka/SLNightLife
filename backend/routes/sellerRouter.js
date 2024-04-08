import express from 'express';
import  { sellerLoginController, sellerSignUpController}  from "../controllers/sellerController.js";

const sellerRouter = express.Router();

sellerRouter.post('/sellerLogin', sellerLoginController);
sellerRouter.post('/sellerSignUp', sellerSignUpController);

export default sellerRouter;