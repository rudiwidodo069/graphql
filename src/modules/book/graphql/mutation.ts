import { GraphQLObjectType, GraphQLNonNull } from "graphql";
import { IBookDoc } from "../interface/interface";
import BookModel from "../model/model";
import { BookService } from "../service/service";
import { BookType, BookInput } from "./types";

const service = new BookService();

export const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createBook: {
      type: BookType,
      args: {
        input: { type: new GraphQLNonNull(BookInput) },
      },
      resolve: async (source, args, context, info): Promise<IBookDoc> => {
        let book: IBookDoc = {} as any;
        try {
          book = new BookModel({ ...args.input });
          await book.save();
        } catch (error) {
          console.log(error);
        }
        return book;
      },
    },
  }),
});
