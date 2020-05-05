import * as passport from "passport";
import * as LocalStrategy from "passport-local";
import db from "../db/model";
import { comparePassword } from "../utils/security/passwords";

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new LocalStrategy.Strategy(
    { usernameField: "email", session: false },
    async (email, password, done) => {
      try {
        let [user]: any = await db.users.findOneByEmail(email);
        if (user && comparePassword(password, user.password)) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (err) {
        done(err);
      }
    }
  )
);
