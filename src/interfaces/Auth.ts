import { IUser } from "./User";

export interface IAuthRequest {
  user: IUser;
  token: {
    access_token: string;
    refresh_token: string;
  };
}
