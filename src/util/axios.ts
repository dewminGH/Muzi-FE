import axios from "axios";

export default axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}/${process.env.REACT_APP_STAGE}/${process.env.REACT_APP_APP_NAME}/`,
});
