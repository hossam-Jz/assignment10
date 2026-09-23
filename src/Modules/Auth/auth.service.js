import { findOne, create } from "../../DB/DB.repository.js";
import { userModel } from "../../DB/Models/user.model.js";
import { hashEnum } from "../../Utils/enums/security.enum.js";
import {
  BadRequestException,
  ConflictException,
} from "../../Utils/respones/err.respones.js";
import { successRespones } from "../../Utils/respones/success.respones.js";
import { encrypt } from "../../Utils/security/encryption.security.js";
import { generateHash } from "../../Utils/security/security.hash.js";
export const signup = async (req, res) => {
    console.log("BODY:", req.body);
  const { userName, email, password, gender, phone } = req.body;
  const Existuser = await findOne({
    model: userModel,
    filter: { email },
  });
  if (Existuser) ConflictException({ message: " email already exist" });
  const hashPassword = await generateHash({
    plainText: password,
    saltRound: 10,
    algorithm: hashEnum.bcrypt,
  });

  const encryptPhone = await encrypt(phone);

  const user = await create({
    model: userModel,
    data: {
      userName,
      email,
      password: hashPassword,
      gender,
      phone: encryptPhone,
      
    },
  });

  return successRespones({
    res,
    message: "user Signup successfuly",
    data: user,
  });
};
