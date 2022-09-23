import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";
import { IBookDoc } from "../interface/interface";
import { BookService } from "../service/service";
import { BookInput, BookType } from "./types";

const bookService = new BookService();

export const books = () => {
  return {
    type: GraphQLList(BookType),
    args: {
      user: {
        type: GraphQLID,
      },
    },
    async resolve(source: any, args: any): Promise<IBookDoc[]> {
      return await bookService.all({});
    },
  };
};

export const author = () => {
  return {
    type: GraphQLList(BookType),
    args: {
      _author: {
        type: GraphQLNonNull(GraphQLID),
      },
    },
    async resolve(source: any, args: any): Promise<IBookDoc[]> {
      return await bookService.all({ author: args._author });
    },
  };
};

export const book = () => {
  return {
    type: BookType,
    args: {
      _id: {
        type: GraphQLNonNull(GraphQLID),
      },
    },
    async resolve(source: any, args: any): Promise<IBookDoc | null> {
      return await bookService.id(args);
    },
  };
};

export const deleteOne = () => {
  return {
    type: BookType,
    args: {
      _id: {
        type: GraphQLNonNull(GraphQLID),
      },
    },
    async resolve(source: any, args: any): Promise<IBookDoc | null> {
      return await bookService.deleteOne(args);
    },
  };
};

export const createBook = () => {
  return {
    type: BookType,
    args: {
      input: {
        type: new GraphQLNonNull(BookInput),
      },
    },
    async resolve(source: any, args: any): Promise<IBookDoc | null> {
      return await bookService.create({ ...args.input });
    },
  };
};
