export type nullableTypes<T> = T | null;

export interface IUser {
  login: nullableTypes<string>;
  sublogin: nullableTypes<string>;
  password: nullableTypes<string>;
}

export interface IError {
  id: string;
  explain: string;
}

export interface IHistory {
  id: string;
  title: string;
  request: string;
  status: boolean;
}
