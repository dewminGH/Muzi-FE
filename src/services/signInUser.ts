import axios from "../util/axios";
import { IResponseError, ISignInUser, ISignInUserResponse, IError } from "./types/interface";

const signInUser = async (props: ISignInUser) => {
  const { password, username } = props;
  try {
    const { data }: ISignInUserResponse = await axios.post("/auth/signin", {
      username,
      password,
    });
    return { response: data, error: null };
  } catch (err: unknown) {
    const {
      response: {
        data: { error },
      },
    } = err as IResponseError;
    return { response: null, error: error as IError };
  }
};

export default signInUser;
