import { Query, Connection } from "../model";
import { IShoe } from "../../utils/types";

export const getOne = async (id: number) => {
  return Query(
    `SELECT s.id, b.brand_name, s.model_name, s.price, s.gender FROM shoes s JOIN brands b ON b.id = s.brand_id WHERE s.id = ?`,
    [id]
  );
};

export const getAll = async () => {
  return Query(
    `SELECT s.id, b.brand_name, s.model_name, s.price, s.gender FROM shoes s JOIN brands b ON b.id = s.brand_id`
  );
};

export const insert = async (body: IShoe) => {
  return Query(`INSERT INTO shoes SET ?`, [body]);
};

export const update = async (id: number, body: IShoe) => {
  return Query(`UPDATE shoes SET ? WHERE id = ?`, [body, id]);
};

export const destroy = async (id: number) => {
  return Query(`DELETE FROM shoes WHERE id = ?`, [id]);
};

export default {
  getOne,
  getAll,
  insert,
  update,
  destroy,
};
