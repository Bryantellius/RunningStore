import * as express from "express";
import db from "../../db/model";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  let id = Number(req.params.id);
  if (id) {
    try {
      let [shoe]: any = await db.shoes.getOne(id);
      res.json(shoe);
    } catch (err) {
      console.log(err);
      next(err);
    }
  } else {
    try {
      let shoes = await db.shoes.getWhatWeCarry();
      res.json(shoes);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
});

router.post("/", async (req, res, next) => {
  let shoe = req.body;
  try {
    let { insertId }: any = await db.shoes.insert(shoe);
    res.json({ insertId, msg: "Shoe Inserted!" });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  let id = Number(req.params.id);
  let shoe = req.body;
  try {
    let { affectedRows }: any = await db.shoes.update(id, shoe);
    res.json({ affectedRows, msg: "Shoe Updated!" });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  let id = Number(req.params.id);
  try {
    let { affectedRows }: any = await db.shoes.destroy(id);
    res.json({ affectedRows, msg: "Shoe Deleted :(" });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/by_model/:id", async (req, res, next) => {
  let model_id = Number(req.params.id);
  try {
    let [shoes] = await db.shoes.spAllOneModel(model_id);
    res.json(shoes);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/by_brand/:id", async (req, res, next) => {
  let brand_name = req.params.id;
  try {
    let [shoes] = await db.shoes.spAllOneBrand(brand_name);
    res.json(shoes);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

export default router;
