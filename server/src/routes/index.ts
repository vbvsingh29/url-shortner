import { Express, Response } from "express";
import {
  createShortUrl,
  fetchAnalytic,
  handleRedirect,
} from "../controller/shortUrlController";
import validateResource from "../middleware/validateResource";
import shortUrlSchema from "../schemas/createShortUrl.schema";

function routes(app: Express) {
  app.get("/healthcheck", (_, res: Response) => {
    res.status(200).send("I am Up");
  });

  app.post("/api/url", validateResource(shortUrlSchema), createShortUrl);
  app.get("/:shortId", handleRedirect);

  app.get("/api/analytics", fetchAnalytic);
}
export default routes;
