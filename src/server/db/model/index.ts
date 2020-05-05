import * as mysql from "mysql";
import config from "../../config";

import shoes from "../queries/shoes";
import users from "../queries/users";
import tokens from "../queries/tokens";

import { IShoe } from "../../utils/types";
import { IUser } from "../../utils/types";

export const Connection = mysql.createConnection(config.mysql);

export const Query = (
  query: string,
  values?: Array<string | number | IShoe | IUser>
) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export default {
  shoes,
  users,
  tokens,
};
