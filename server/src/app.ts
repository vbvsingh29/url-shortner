import express from "express";
import config from "config";
import routes from "./routes";
import bodyParser from "body-parser";
import db from "./db";

const app = express();
const port = config.get<number>("port");

app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`SERVER is listening at http://localhost:${port}`);
  db();
  routes(app);
});
