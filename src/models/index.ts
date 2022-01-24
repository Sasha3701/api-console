export type nullableTypes = string | null;

export interface IUser {
  login: nullableTypes;
  sublogin: nullableTypes;
  password: nullableTypes;
}

export interface IError {
  id: string;
  explain: string;
}
