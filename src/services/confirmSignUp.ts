import axios from "../util/axios";
import { IConfirmSignUp } from "./types/interface";

const confirmSignUp = async (props: IConfirmSignUp) => {
  const { username, code } = props;
  try {
    const response = await axios.post("/auth/signup/confirm", {
      username,
      code,
    });
    console.log(response);
  } catch (error: unknown) {
    //@todo add error logger
  }
};

export default confirmSignUp;
