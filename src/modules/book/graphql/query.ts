import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
} from "graphql";
import { BookType } from "./types";
import { IBookDoc } from "../interface/interface";
import { BookService } from "../service/service";
import BookModel from "../model/model";

const service = new BookService();

export const Query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    books: {
      type: GraphQLList(BookType),
      args: { user: { type: GraphQLID } },
      resolve: async (
        resource,
        args,
        context,
        info
      ): Promise<Array<IBookDoc>> => {
        let books: Array<IBookDoc> = [];
        try {
          books = await BookModel.find({ user: args._id }).populate("users");
          // books = await BookModel.find({});
        } catch (error) {
          console.log(error);
        }
        return books;
      },
    },
    book: {
      type: BookType,
      args: { _id: { type: GraphQLNonNull(GraphQLID) } },
      resolve: async (source, args, context, info): Promise<IBookDoc> => {
        let book: IBookDoc = {} as any;
        try {
          book =
            (await BookModel.findById({ book: args._id }).populate("users")) ||
            ({} as any);
        } catch (error) {
          console.log(error);
        }
        return book;
      },
    },
  }),
});
