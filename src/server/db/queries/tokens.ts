import { Query } from "../model";

export const insert = (userid: number) => {
  Query(`INSERT INTO accesstokens SET userid = ?`, [userid]);
};

export const update = (accesstokenid: number, token: string) => {
  Query(`UPDATE accesstokens SET token = ? WHERE id = ?`, [
    token,
    accesstokenid,
  ]);
};

export const findOne = (accesstokenid: number, token: string) => {
  Query(`SELECT * FROM accesstokens WHERE id = ? AND token = ?`, [
    accesstokenid,
    token,
  ]);
};

export default {
  insert,
  update,
  findOne,
};
