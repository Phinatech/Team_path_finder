import axios from "axios";
import { UserData } from "../Alllnterface";

const localUrl = "http://localhost:1400";

export const createUser = async ({ name, email, password }: any) => {
  return await axios
    .post(`${localUrl}/api/postuser`, {
      name,
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};
