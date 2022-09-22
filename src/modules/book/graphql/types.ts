import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
} from "graphql";
import { UserType } from "../../user/graphql/types";

export const BookType = new GraphQLObjectType({
  name: "BookType",
  fields: () => ({
    _id: { type: GraphQLString },
    user: { type: UserType },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

export const BookInput = new GraphQLInputObjectType({
  name: "BookInput",
  fields: () => ({
    user: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});
