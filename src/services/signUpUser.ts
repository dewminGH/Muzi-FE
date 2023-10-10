import axios from "../util/axios";
import { ISignUpUser } from "./types/interface";

const signUpUser = async (props: ISignUpUser) => {
  const { name, profile, username, password } = props;
  try {
    const response = await axios.post("/auth/signup", {
      name,
      profile,
      username,
      password,
    });
    console.log(response);
  } catch (error: unknown) {
    //@todo add error logger
  }
};

export default signUpUser;
