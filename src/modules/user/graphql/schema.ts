import { GraphQLSchema } from "graphql";
import { MutationUser } from "./mutation";
import { UserQuery } from "./query";

export const grapqlSchema = new GraphQLSchema({
  query: UserQuery,
  mutation: MutationUser,
});
