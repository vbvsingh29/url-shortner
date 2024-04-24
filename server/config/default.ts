import "dotenv/config";

export default {
  port: process.env.PORT,
  dbUri: process.env.DB_URI,
  corsOrigin: process.env.CORS_ORIGIN,
};
