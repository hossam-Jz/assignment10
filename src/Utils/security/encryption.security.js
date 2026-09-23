import crypto from "node:crypto";
import { ENC_KEY } from "../../config/config.service.js";
import {Buffer} from "node:buffer";
const ENCRYPTION_SECRET_KEY = Buffer.from(ENC_KEY);
const iv_length = 16;

export const encrypt = (text) => {
  const iv = crypto.randomBytes(iv_length);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    ENCRYPTION_SECRET_KEY,
    iv,
  );
  let encryptedData = cipher.update(text, "utf-8", "hex");
  encryptedData += cipher.final("hex");
  return `${iv.toString("hex")}:${encryptedData}`;
};

export const decrypt = (encryptionData) => {
  const [ivHex, encryptionText] = encryptedData.split(":") || [];

  const ivLikeBinary = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    EVCRYPTION_SECRET_KEY,
    iv,
  );
  let decryptedData = decipher.update(encryptionData, "hex", "utf-8");
  decryptedData += cipher.final("utf-8");

  return decryptedData;
};
