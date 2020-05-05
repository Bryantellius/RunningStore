import { Query } from "../model";

export const insert = (body: IUser) => {
  Query(`INSERT INTO users SET ?`, [body]);
};

export const findOneByEmail = (email: string) => {
  Query(`SELECT * FROM users WHERE email = ? LIMIT 1`, [email]);
};

export const findOneById = (id: number) => {
  Query(`SELECT * FROM users WHERE id = ?`, [id]);
};

export interface IUser {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role: string;
}

export default {
  insert,
  findOneByEmail,
  findOneById,
};
