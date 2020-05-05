import * as express from "express";
import db from "../../db/model";
import { hashPassword } from "../../utils/security/passwords";
import { CreateToken } from "../../utils/security/tokens";

const router = express.Router();

router.post("/", async (req: any, res, next) => {
  try {
    let user = req.body;
    user.password = hashPassword(req.body.password);
    let { insertId }: any = await db.users.insert(user);
    let token = await CreateToken({ userid: insertId });
    res.json({
      token,
      userid: insertId,
      role: "admin",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

export default router;
