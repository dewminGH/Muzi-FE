import axios from "../util/axios";
import { getAccessToken } from "../_data/localStorage";
import { IResponseError, IAllCollaborators, IError } from "./types/interface";

const getAllCollaborators = async () => {
  try {
    const {
      data: { response },
    }: IAllCollaborators = await axios.get("/client/get-collaborators", {
      headers: {
        authorization: getAccessToken() as string,
      },
    });
    return { response: response, error: null };
  } catch (err: unknown) {
    const {
      response: {
        data: { error },
      },
    } = err as IResponseError;
    return { response: null, error: error as IError };
  }
};

export default getAllCollaborators;
