import { UserService } from "../service/service";
import { Request, Response } from "express";
import { IUser } from "../interface/interface";

export class UserController {
  protected service: UserService;

  constructor() {
    this.service = new UserService();
    this.one = this.one.bind(this);
    this.all = this.all.bind(this);
    this.create = this.create.bind(this);
  }

  async one(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const result = await this.service.one({ email: email });
      res.json({
        status: "ok",
        paylod: result,
      });
    } catch (error: any) {
      res.json({
        status: "error",
        message: error.message,
      });
    }
  }

  async all(req: Request, res: Response) {
    try {
      const result = await this.service.all({});
      res.json({
        status: "ok",
        paylod: result,
      });
    } catch (error: any) {
      res.json({
        status: "error",
        message: error.message,
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const data: IUser = {
        name: name,
        email: email,
        password: password,
      };

      const result = await this.service.create(data);
      res.json({
        status: "ok",
        paylod: result,
      });
    } catch (error: any) {
      res.json({
        status: "error",
        message: error.message,
      });
    }
  }
}
