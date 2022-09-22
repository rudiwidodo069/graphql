import express from "express";

export enum HttpResponse {
  NOD_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  BAD_REQUEST = 400,
}

export class CustomError {
  private res: express.Response;
  private code: HttpResponse;
  private message: string;

  constructor(res: express.Response, code: HttpResponse, message: string) {
    this.res = res;
    this.code = code;
    this.message = message;
  }

  errorResponse() {
    this.res.status(this.code).json({
      status: "error",
      statusCode: this.code,
      message: this.message,
    });
  }
}
