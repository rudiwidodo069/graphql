import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
} from "graphql";
import { UserType } from "./types";
import { IUserDoc } from "../interface/interface";
import { UserService } from "../service/service";

const service = new UserService();

export const UserQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    users: {
      type: GraphQLList(UserType),
      resolve: async (
        resource,
        args,
        context,
        info
      ): Promise<Array<IUserDoc>> => {
        let users: Array<IUserDoc> = [];
        try {
          users = await service.all({});
        } catch (error) {
          console.log(error);
        }
        return users;
      },
    },
    user: {
      type: UserType,
      args: { _id: { type: GraphQLNonNull(GraphQLID) } },
      resolve: async (source, args, context, info): Promise<IUserDoc> => {
        let user: IUserDoc = {} as any;
        try {
          user = (await service.id(args._id)) || ({} as any);
        } catch (error) {
          console.log(error);
        }
        return user;
      },
    },
  }),
});
