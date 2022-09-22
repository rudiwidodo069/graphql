import { Document } from "mongoose";

export interface IUserDoc extends Document {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
