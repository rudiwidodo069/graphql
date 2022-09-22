import BookModel, { BookFilterQuery, BookModelInterface } from "../model/model";

export class BookData {
  protected model: BookModelInterface;

  constructor() {
    this.model = BookModel;
  }

  getone(query: BookFilterQuery) {
    return this.model.findOne(query);
  }

  getById(query: BookFilterQuery) {
    return this.model.findById(query);
  }

  getAll(query: BookFilterQuery) {
    return this.model.find(query);
  }

  create(query: BookFilterQuery) {
    return this.model.create(query);
  }
}
