import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0987654311", 6);

export interface ShortUrl extends Document {
  shortId: string;
  destination: string;
}

const schema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  destination: {
    type: String,
    required: true,
  },
});

const shortUrl = mongoose.model<ShortUrl>("shortUrl", schema);

export default shortUrl;
