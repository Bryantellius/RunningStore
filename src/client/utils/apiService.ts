import fetch from "isomorphic-fetch";

export const apiService = async (
  url: string,
  method: string = "GET",
  body?: {}
) => {
  let headers = {
    "Content-type": "application/json",
  };

  try {
    let res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });
    if (res.ok) {
      return res.json();
    } else {
      return false;
    }
  } catch (err) {
    throw err;
  }
};
