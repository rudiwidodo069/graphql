import app from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`express graphql server is ready on port :${port}`)
);
