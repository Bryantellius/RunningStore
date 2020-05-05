import * as dotenv from "dotenv";

const envFound = dotenv.config();

if (!envFound) {
  throw new Error(".env not found");
}

export default {
  mysql: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.SCHEMA,
  },
  port: process.env.PORT,
  auth: {
    secret: process.env.SECRET,
  },
};
