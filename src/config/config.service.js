import dotenv from "dotenv";

dotenv.config({ path: "./src/config/dev.env" });

export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
 export const SALT_ROUND = Number(process.env.SALT_ROUND);;
export const ENC_KEY = process.env.ENC_KEY;
