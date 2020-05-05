import { Query } from "../model";
import { IShoe } from "../../utils/types";

export const getOne = async (id: number) => {
  Query(`SELECT * FROM shoes WHERE id = ?`, [id]);
};

export const getAll = async () => {
  Query(`SELECT * FROM shoes`);
};

export const insert = async (body: IShoe) => {
  Query(`INSERT INTO shoes SET ?`, [body]);
};

export const update = async (id: number, body: IShoe) => {
  Query(`UPDATE shoes SET ? WHERE id = ?`, [body, id]);
};

export const destroy = async (id: number) => {
  Query(`DELETE FROM shoes WHERE id = ?`, [id]);
};

export default {
  getOne,
  getAll,
  insert,
  update,
  destroy,
};
