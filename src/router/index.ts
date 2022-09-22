import { Request, Response, Router } from "express";
import dataUser from "../data.json";
import { userRouter } from "../modules/user/api/route";

const router = Router();

router.get("/test", async (req: Request, res: Response) => {
  try {
    res.status(res.statusCode).json({
      status: "ok",
      data: dataUser.users,
    });
  } catch (error) {
    console.log(error);
  }
});

router.use("/users", userRouter);

export { router as indexRouter };
