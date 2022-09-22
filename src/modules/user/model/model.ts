import mongoose from "mongoose";
import { IUser, IUserDoc } from "../interface/interface";

export type UserFilterQuery = mongoose.FilterQuery<IUserDoc>;

export interface UserModelInterface extends mongoose.Model<IUserDoc> {
  build(attr: IUser): IUserDoc;
}

const userModel: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    toObject: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const UserModel = mongoose.model<IUserDoc, UserModelInterface>(
  "users",
  userModel
);

userModel.statics.build = (attr: IUser) => {
  return new UserModel(attr);
};

export default UserModel;
