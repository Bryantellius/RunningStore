import { Query } from "../model";
import { IUser } from "../../utils/types";

export const insert = async (body: IUser) => {
  return Query(`INSERT INTO users SET ?`, [body]);
};

export const findOneByEmail = async (email: string) => {
  return Query(`SELECT * FROM users WHERE email = ? LIMIT 1`, [email]);
};

export const findOneById = async (id: number) => {
  return Query(`SELECT * FROM users WHERE id = ?`, [id]);
};

export default {
  insert,
  findOneByEmail,
  findOneById,
};
