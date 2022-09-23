import { Router } from "express";
import { BookController } from "./controller";

const router = Router();

const controller = new BookController();

router.get("/", controller.all);
router.post("/", controller.create);

export { router as bookRouter };
