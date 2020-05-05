export interface IUser {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role: string;
}

export interface IPayload {
  [key: string]: any;
  userid: number;
  unique?: string;
}

export interface IShoe {
  brand_id: number;
  model_name: string;
  price: number;
  gender: string;
}

export interface IError {
  status?: number;
  message?: string;
}
