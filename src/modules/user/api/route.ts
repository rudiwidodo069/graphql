import { Router } from "express";
import { UserController } from "./controller";

const router = Router();

const controller = new UserController();

router.get("/one", controller.one);
router.get("/", controller.all);
router.post("/", controller.create);

export { router as userRouter };
