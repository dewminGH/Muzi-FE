import axios from "../util/axios";
import { ISignInUser } from "./types/interface";

const signInUser = async (props: ISignInUser) => {
  const { password, username } = props;
  try {
    const response = await axios.post("/auth/signin", {
      username,
      password,
    });
    console.log(response);
  } catch (error: unknown) {
    //@todo add error logger
  }
};

export default signInUser;
