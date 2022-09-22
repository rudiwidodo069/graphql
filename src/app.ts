import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { indexRouter } from "./router";
import { grapqlSchema } from "./modules/user/graphql/schema";
import { grapqlSchemaBook } from "./modules/book/graphql/schema";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("mongodb connection success"))
  .catch((err) => console.log(`mongodb connection error : ${err.message}`));

process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : "";

app.use("/v1", indexRouter);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: grapqlSchema,
    graphiql: true,
  })
);

export default app;
