import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {
  author,
  book,
  books,
  createBook,
  deleteOne,
} from "../modules/book/graphql/resolver";
import { user, users } from "../modules/user/graphql/resolver";

const Query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // book query
    books: books(),
    book: book(),
    author: author(),
    deleteOne: deleteOne(),

    // user query
    users: users(),
    user: user(),
  },
});

const Mutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    createBook: createBook(),
  },
});

export const RootType = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
