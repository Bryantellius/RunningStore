import { Query } from "../model";
import { IShoe } from "../../utils/types";

export const getOne = async (id: number) => {
  return Query(
    `SELECT s.id, s.model_id, b.brand_name, b.model_name, s.size, b.price, s.gender FROM shoes s JOIN brands b ON b.id = s.brand_id WHERE s.id = ?`,
    [id]
  );
};

export const getAll = async () => {
  return Query(
    `SELECT s.id, s.model_id, b.brand_name, b.model_name, s.size, b.price, s.gender FROM shoes s JOIN brands b ON b.id = s.brand_id`
  );
};

export const getWhatWeCarry = async () => {
  return Query(`SELECT DISTINCT * from brands`);
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

// Stored Procedures

// Returns an array of all shoe objects with the same model_id
export const spAllOneModel = async (model_id: number) => {
  return Query(`CALL spAllOneModel(?)`, [model_id]);
};

// Returns an array of all shoe objects with the same brand_name
export const spAllOneBrand = async (brand_name: string) => {
  return Query(`CALL spAllOneBrand(?)`, [brand_name]);
};

export default {
  getOne,
  getAll,
  getWhatWeCarry,
  insert,
  update,
  destroy,
  spAllOneModel,
  spAllOneBrand,
};
