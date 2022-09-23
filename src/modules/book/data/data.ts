import BookModel, { BookFilterQuery, BookModelInterface } from "../model/model";

export class BookData {
  protected model: BookModelInterface;

  constructor() {
    this.model = BookModel;
  }

  getone(query: BookFilterQuery) {
    return this.model.findOne(query).populate("user").exec();
  }

  getById(query: BookFilterQuery) {
    return this.model.findById(query).populate("user").exec();
  }

  getAll(query: BookFilterQuery) {
    return this.model.find(query).populate("user").exec();
  }

  create(query: BookFilterQuery) {
    return this.model.create(query);
  }

  deleteOne(query: BookFilterQuery) {
    return this.model.findByIdAndDelete(query);
  }
}
