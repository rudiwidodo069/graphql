import expess from "express";
import { CustomError, HttpResponse } from "../../../utils/CustomError";
import { UserData } from "../data/data";
import { IUser, IUserDoc } from "../interface/interface";
import { UserFilterQuery } from "../model/model";

export class UserService {
  protected data: UserData;

  constructor() {
    this.data = new UserData();
  }

  async one(query: UserFilterQuery): Promise<IUserDoc | null> {
    const user = await this.data.getone(query);
    if (!user) {
      new CustomError(
        expess.response,
        HttpResponse.BAD_REQUEST,
        "data not found"
      );
    }
    return user;
  }

  async id(query: UserFilterQuery): Promise<IUserDoc | null> {
    return await this.data.getById(query);
  }

  async all(query: UserFilterQuery): Promise<IUserDoc[]> {
    return await this.data.getAll(query);
  }

  async create(query: IUser): Promise<IUserDoc | null> {
    return await this.data.create(query);
  }
}
