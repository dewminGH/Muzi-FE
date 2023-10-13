import { userRoles } from "./enum";

/* signUpUser */
export interface ISignUpUser {
  name: string;
  username: string;
  password: string;
  profile: userRoles;
}

/* signInUser */
export interface ISignInUser {
  username: string;
  password: string;
}

export interface ISignInUserResponse {
  data: {
    message: string;
    response: {
      AccessToken: string;
      ExpiresIn: number;
      TokenType: string;
      RefreshToken: string;
      IdToken: string;
    } | null;
  };
}

/* confirmSignUp */
export interface IConfirmSignUp {
  username: string;
  code: string;
}

/* common */

export interface IError {
  message: string;
  code: string;
}

export interface IResponseError {
  response: {
    data: {
      error: IError;
    };
  };
}
