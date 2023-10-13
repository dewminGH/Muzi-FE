import axios from "../util/axios";
import { IConfirmSignUp } from "./types/interface";

const confirmSignUp = async (props: IConfirmSignUp) => {
  const { username, code } = props;
  try {
    await axios.post("/auth/signup/confirm", {
      username,
      code,
    });
  } catch (error: unknown) {
    //@todo add error logger
  }
};

export default confirmSignUp;
