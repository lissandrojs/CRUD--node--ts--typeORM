import { Router } from "express";

const userRoute = Router();

import userController from "../controllers/userController.controller";
import verifyEmail from "../middlewares/UserEmail.middleware";

const userControllers = new userController;

userRoute.post("/users", verifyEmail,userControllers.store)
userRoute.get("/users", userControllers.index)
userRoute.get("/users/:id",userControllers.show)

userRoute.delete("/users/:id",userControllers.delete)
userRoute.patch("/users/:id",userControllers.update)

export default userRoute