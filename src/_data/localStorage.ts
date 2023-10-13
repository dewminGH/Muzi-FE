import { IAuthentication } from "./types/interface";

export const setUserAuthentication = (authentication: IAuthentication) => {
  const { AccessToken, IdToken, RefreshToken } = authentication;
  localStorage.setItem("AccessToken", AccessToken);
  localStorage.setItem("IdToken", IdToken);
  localStorage.setItem("RefreshToken", RefreshToken);
};

export const validateUserAuthentication = () => {
  return localStorage.getItem("AccessToken") && localStorage.getItem("IdToken") && localStorage.getItem("RefreshToken")
    ? true
    : false;
};

export const setUserSignOut = () => {
  localStorage.removeItem("AccessToken");
  localStorage.removeItem("IdToken");
  localStorage.removeItem("RefreshToken");
};

export const getAccessToken = () => {
  return localStorage.getItem("AccessToken");
};
