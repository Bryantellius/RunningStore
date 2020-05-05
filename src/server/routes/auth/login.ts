import * as express from "express";
import * as passport from "passport";
import { CreateToken } from "../../utils/security/tokens";

const router = express.Router();

router.post(
  "/",
  passport.authenticate("local"),
  async (req: any, res, next) => {
    try {
      let userid = req.user.id;
      let role = req.user.role;
      let token = await CreateToken({ userid });
      res.json({
        token,
        userid,
        role,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);

export default router;
