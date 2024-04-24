import express from "express";
import config from "config";
import cors from "cors";
import routes from "./routes";
import bodyParser from "body-parser";
import db from "./db";

const app = express();
const port = config.get<number>("port");
const corsOrigin = config.get<string>("corsOrigin");
console.log(port, corsOrigin, "TEst");
app.use(
  cors({
    origin: corsOrigin,
  })
);

app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`SERVER is listening at http://localhost:${port}`);
  db();
  routes(app);
});
