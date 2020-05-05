import { Query } from "../model";

export const getOne = (id: number) => {
  Query(`SELECT * FROM shoes WHERE id = ?`, [id]);
};

export const getAll = () => {
  Query(`SELECT * FROM shoes`);
};

export const insert = (body: IShoe) => {
  Query(`INSERT INTO shoes SET ?`, [body]);
};

export const update = (id: number, body: IShoe) => {
  Query(`UPDATE shoes SET ? WHERE id = ?`, [body, id]);
};

export const destroy = (id: number) => {
  Query(`DELETE FROM shoes WHERE id = ?`, [id]);
};

export interface IShoe {
  brand_id: number;
  model_name: string;
  price: number;
  gender: string;
}

export default {
  getOne,
  getAll,
  insert,
  update,
  destroy,
};
