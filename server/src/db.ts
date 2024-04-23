import config from "config";
import mongoose from "mongoose";

async function db() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri).then(() => {
      console.log(`DB is connected`);
    });
  } catch (e: any) {
    console.log(e);
  }
}

export default db;
