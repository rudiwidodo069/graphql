import { GraphQLSchema } from "graphql";
import { Mutation } from "./mutation";
import { Query } from "./query";

export const grapqlSchemaBook = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
