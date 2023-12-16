import Jwt from "jsonwebtoken";
import { config } from "../settings/config.js";

export const createJWT = async ({ userId }) => {
   return new Promise((res, rej) => {
     Jwt.sign(
       { userId },
        config.jwt_secret,
        (err, token) => {
          if (err) rej(err);
          res(token);
        }
      ) ;
    });
   };