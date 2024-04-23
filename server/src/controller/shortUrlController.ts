import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";
import analytics from "../models/analytics.model";

export async function createShortUrl(req: Request, res: Response) {
  const { destination } = req.body;

  const newURL = await shortUrl.create({ destination });

  return res.send(newURL);
}

export async function handleRedirect(req: Request, res: Response) {
  const { shortId } = req.params;

  const short = await shortUrl.findOne({ shortId }).lean();
  console.log(short, "s");

  if (!short) {
    return res.sendStatus(404);
  }

  analytics.create({ shortUrl: short._id });
  res.redirect(short.destination);
}

export async function fetchAnalytic(req: Request, res: Response) {
  const data = await analytics.find({}).lean();

  return res.send(data);
}
