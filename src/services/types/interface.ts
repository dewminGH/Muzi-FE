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

/* confirmSignUp */
export interface IConfirmSignUp {
  username: string;
  code: string;
}
