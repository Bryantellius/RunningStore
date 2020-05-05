import * as passport from "passport";
import * as BearerStrategy from "passport-http-bearer";
import db from "../db/model";
import { ValidToken } from "../utils/security/tokens";
import { IPayload, IUser } from "../utils/types";

passport.use(
  new BearerStrategy.Strategy(async (token, done) => {
    try {
      let payload: IPayload = await ValidToken(token);
      let [user]: any = await db.users.findOneById(payload.userid);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (err) {
      done(err);
    }
  })
);
