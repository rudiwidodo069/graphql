import { IUser, IUserDoc } from "../interface/interface";
import UserModel, { UserFilterQuery, UserModelInterface } from "../model/model";

export class UserData {
  protected model: UserModelInterface;

  constructor() {
    this.model = UserModel;
  }

  getone(query: UserFilterQuery) {
    return this.model.findOne(query);
  }

  getById(query: UserFilterQuery) {
    return this.model.findById(query);
  }

  getAll(query: UserFilterQuery) {
    return this.model.find(query);
  }

  create(query: UserFilterQuery) {
    return this.model.create(query);
  }
}
