import { BookService } from "../service/service";
import { Request, Response } from "express";
import { IBook } from "../interface/interface";

export class BookController {
  protected service: BookService;

  constructor() {
    this.service = new BookService();
    this.all = this.all.bind(this);
    this.create = this.create.bind(this);
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
      const { title, author, description, user } = req.body;

      const data: IBook = {
        title: title,
        author: author,
        description: description,
        user: user,
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
