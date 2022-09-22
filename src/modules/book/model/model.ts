import mongoose, { Schema } from "mongoose";
import { IBook, IBookDoc } from "../interface/interface";

export type BookFilterQuery = mongoose.FilterQuery<IBookDoc>;

export interface BookModelInterface extends mongoose.Model<IBookDoc> {
  build(attr: IBook): IBookDoc;
}

const bookModel: mongoose.Schema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    toObject: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const BookModel = mongoose.model<IBookDoc, BookModelInterface>(
  "book",
  bookModel
);

bookModel.statics.build = (attr: IBook) => {
  return new BookModel(attr);
};

export default BookModel;
