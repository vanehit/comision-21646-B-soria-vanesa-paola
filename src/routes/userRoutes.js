import { Router } from "express";
import { userLoginController, userSignupController } from '../controllers/userController';

const userRouter = Router();

// Ruta para el inicio de sesión (login)
userRouter.post('/login', userLoginController);

// Ruta para el registro (signup)
userRouter.post('/signup', userSignupController);

export { userRouter }
