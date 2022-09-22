import { GraphQLObjectType, GraphQLNonNull } from "graphql";
import { IUserDoc } from "../interface/interface";
import UserModel from "../model/model";
import { UserService } from "../service/service";
import { UserType, UserInput } from "./types";

const service = new UserService();

export const MutationUser = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createUser: {
      type: UserType,
      args: {
        input: { type: new GraphQLNonNull(UserInput) },
      },
      resolve: async (source, args, context, info): Promise<IUserDoc> => {
        let user: IUserDoc = {} as any;
        try {
          user = new UserModel({ ...args.input });
          await user.save();
        } catch (error) {
          console.log(error);
        }
        return user;
      },
    },
  }),
});
