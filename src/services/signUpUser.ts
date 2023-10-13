import axios from "../util/axios";
import { ISignUpUser } from "./types/interface";

const signUpUser = async (props: ISignUpUser) => {
  const { name, profile, username, password } = props;
  try {
    await axios.post("/auth/signup", {
      name,
      profile,
      username,
      password,
    });
  } catch (error: unknown) {
    //@todo add error logger
  }
};

export default signUpUser;
