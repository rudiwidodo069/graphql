import expess from "express";
import { CustomError, HttpResponse } from "../../../utils/CustomError";
import { BookData } from "../data/data";
import { IBook, IBookDoc } from "../interface/interface";
import { BookFilterQuery } from "../model/model";

export class BookService {
  protected data: BookData;

  constructor() {
    this.data = new BookData();
  }

  async one(query: BookFilterQuery): Promise<IBookDoc | null> {
    const Book = await this.data.getone(query);
    if (!Book) {
      new CustomError(
        expess.response,
        HttpResponse.BAD_REQUEST,
        "data not found"
      );
    }
    return Book;
  }

  async id(query: BookFilterQuery): Promise<IBookDoc | null> {
    return await this.data.getById(query);
  }

  async all(query: BookFilterQuery): Promise<IBookDoc[]> {
    return await this.data.getAll(query);
  }

  async create(query: IBook): Promise<IBookDoc | null> {
    return await this.data.create(query);
  }

  async deleteOne(query: BookFilterQuery): Promise<IBookDoc | null> {
    return await this.data.deleteOne(query);
  }
}
