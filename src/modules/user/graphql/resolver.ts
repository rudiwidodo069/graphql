import { GraphQLNonNull, GraphQLID, GraphQLList } from "graphql";
import { UserService } from "../service/service";
import { IUserDoc } from "../interface/interface";
import { UserType } from "./types";

const userService = new UserService();

// get all user
export const users = () => {
  return {
    type: GraphQLList(UserType),
    async resolve(source: any, args: any): Promise<IUserDoc[]> {
      return await userService.all({});
    },
  };
};

// get one user by id
export const user = () => {
  return {
    type: GraphQLList(UserType),
    args: {
      _id: {
        type: GraphQLNonNull(GraphQLID),
      },
    },
    async resolver(source: any, args: any): Promise<IUserDoc | null> {
      console.log(args);
      const data = await userService.id(args);
      console.log(data);
      return data;
    },
  };
};

export const userByEmail = () => {};
