import { Document } from "mongoose";
import { IUserDoc } from "../../user/interface/interface";

export interface IBookDoc extends Document {
  user: IUserDoc;
  title: string;
  author: string;
  description: string;
}

export interface IBook {
  user: IBookDoc;
  title: string;
  author: string;
  description: string;
}
