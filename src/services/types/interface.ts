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

/* getAllCollaborators */
export interface ICollaborator {
  id: string;
  email: string;
  f_name: string;
  l_name: string;
  date: string;
  country: string;
  languages: string[];
  bio: string;
  talents: string[];
  on_board: boolean;
}

export interface IAllCollaborators {
  data: {
    response: {
      Items: ICollaborator[];
    };
  };
}

/* getRandom */
export interface IRecommendMeRandomInputItem {
  id: string;
  userData: string;
}

export interface IGetRandomResponse {
  data: {
    recommendProfiles: string[];
  };
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

export interface IAccessTokenDecode {
  sub: string;
  exp: number;
}
